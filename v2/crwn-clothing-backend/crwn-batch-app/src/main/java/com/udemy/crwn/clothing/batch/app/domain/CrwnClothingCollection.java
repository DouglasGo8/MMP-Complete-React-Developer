package com.udemy.crwn.clothing.batch.app.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author dougdb
 */
@Data
@NoArgsConstructor
public class CrwnClothingCollection {
  private Hats hats;
  private Mens mens;
  private Womens womens;
  private Sneakers sneakers;
}
