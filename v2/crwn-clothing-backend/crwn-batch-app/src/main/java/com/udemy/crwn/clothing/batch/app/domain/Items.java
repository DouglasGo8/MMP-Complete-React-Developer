package com.udemy.crwn.clothing.batch.app.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Items {
  private int id;
  private double price;
  private String name;
  private String imageUrl;
}
