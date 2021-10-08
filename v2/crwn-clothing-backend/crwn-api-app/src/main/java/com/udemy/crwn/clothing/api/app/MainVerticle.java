package com.udemy.crwn.clothing.api.app;


import io.vertx.config.ConfigRetriever;
import io.vertx.config.ConfigRetrieverOptions;
import io.vertx.config.ConfigStoreOptions;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Promise;
import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.mongo.MongoClient;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import lombok.extern.log4j.Log4j2;

/**
 * @author dougdb
 */
@Log4j2
public class MainVerticle extends AbstractVerticle {

  @Override
  public void start(final Promise<Void> start) {

    final var router = Router.router(vertx);
    final var configStoreOpts = new ConfigStoreOptions();
    final var configRetrieveOpts = new ConfigRetrieverOptions();

    configStoreOpts.setType("file");
    configStoreOpts.setConfig(new JsonObject().put("path", "./src/main/resources/config.json"));
    configRetrieveOpts.addStore(configStoreOpts);
    // Mongo Configuration
    ConfigRetriever.create(vertx, configRetrieveOpts).getConfig(r -> {
      if (r.failed()) {
        log.error(r.cause());
      } else {
        //log.info(ar.result());
        mongo = MongoClient.create(vertx, r.result());
      }
    });
    // Routers
    router.get("/api/clouths").handler(this::getAll);
    //
    super.vertx.createHttpServer().requestHandler(router)
            .listen(super.config().getInteger("http.port", 8080), ar -> {
              if (ar.succeeded()) {
                log.info("Server is now listening!");
              } else {
                log.info(String.format("fail %s", ar.cause()));
                start.complete();
              }
            });
  }

  private void getAll(RoutingContext routingContext) {
    this.mongo.find(COLLECTION, new JsonObject(), json -> {
      if (json.failed()) {
        routingContext.response().end(String.format("Damn %s", json.cause()));
      } else {

        // json.result().stream().map(Whisky::new) .forEach(System.out::println);

        routingContext.response().putHeader("content-type", "application/json; charset=utf-8")
                .end(Json.encodePrettily(json.result()));
      }
    });
  }


  @Override
  public void stop() throws Exception {
    // TODO Auto-generated method stub
    this.mongo.close();
  }


  private MongoClient mongo;
  private static final String COLLECTION = "CrwnClothing";
}
