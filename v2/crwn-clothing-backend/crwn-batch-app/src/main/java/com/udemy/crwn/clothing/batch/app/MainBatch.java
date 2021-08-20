package com.udemy.crwn.clothing.batch.app;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.udemy.crwn.clothing.batch.app.domain.CrwnClothingCollection;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.data.MongoItemWriter;
import org.springframework.batch.item.data.builder.MongoItemWriterBuilder;
import org.springframework.batch.item.json.JacksonJsonObjectReader;
import org.springframework.batch.item.json.JsonItemReader;
import org.springframework.batch.item.json.builder.JsonItemReaderBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.data.mongodb.core.MongoOperations;

/**
 * @author dougdb
 */
@EnableBatchProcessing
@SpringBootApplication
public class MainBatch {

  @Autowired
  private JobBuilderFactory job;

  @Autowired
  private StepBuilderFactory step;

  @Bean
  @StepScope
  public JsonItemReader<CrwnClothingCollection> crwnClothingColletionItemReader(@Value("#{jobParameters['crwnClothingJsonFile']}") Resource inputFile) {

    final var jsonMap = new ObjectMapper();
    final var jsonObjectReader = new JacksonJsonObjectReader<>(CrwnClothingCollection.class);
    jsonObjectReader.setMapper(jsonMap);

    return new JsonItemReaderBuilder<CrwnClothingCollection>()
            .name("crwnClothingColletionItemReader")
            .resource(inputFile)
            .jsonObjectReader(jsonObjectReader)
            .build();
  }

  @Bean
  public MongoItemWriter<CrwnClothingCollection> crwnClothingColletionItemWriter(final MongoOperations mongoOperations) {
    return new MongoItemWriterBuilder<CrwnClothingCollection>().collection("CrwnClothing")
            .template(mongoOperations)
            .build();
  }

  /*@Bean
  public ItemWriter<CrwnClothingCollection> crwnClothingColletionItemWriter() {
    return (items) -> items.forEach(System.out::println);
  }*/

  @Bean
  public Step importAndReadJsonFile() {
    return this.step.get("importAndReadJsonFile").<CrwnClothingCollection, CrwnClothingCollection>chunk(10)
            .reader(crwnClothingColletionItemReader(null))
            .writer(crwnClothingColletionItemWriter(null))
            .build();
  }

  @Bean
  public Job job() {
    return this.job.get("job").start(this.importAndReadJsonFile()).build();
  }


  public static void main(String... args) {
    SpringApplication.run(MainBatch.class, args);
  }
}
