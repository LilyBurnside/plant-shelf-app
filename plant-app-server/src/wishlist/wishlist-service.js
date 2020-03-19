'use strict';

const WishlistService = {
  getWishes(db) {
    return db
      .from('plants_wishes AS wish')
      .select(
        'base.id',
        'base.cmn_name',
        'base.sci_name',
        'base.photo',
        'base.light',
        'base.pet_safe',
        'base.water',
        'base.size',
        'base.care_level',
        'user.id',
        'user.user_name',
        'wish.id',
        'wish.plant_id',
        'wish.user_id'
      )
      .leftJoin('plants_users AS user', 'wish.user_id', 'user.id')
      .leftJoin('plants_base AS base', 'wish.plant_id', 'base.id');
  },

  insertWish(db, newWish) {
    return db
      .insert(newWish)
      .into('plants_wishes')
      .returning('*')
      .then(WishlistService.getWishes(db));
  },

  deleteWish(db, id) {
    return db
      .from('plants_wishes')
      .where(id)
      .del();
  }

};

module.exports = WishlistService;