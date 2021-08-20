package com.udemy.crwn.clothing.batch.app.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public abstract class Head {
  private int id;
  private String title;
  private String route;
  private List<Items> items;
}
