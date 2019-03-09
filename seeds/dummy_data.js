const timestamp = new Date();

const time = {
    created_at: timestamp,
    updated_at: timestamp
};

exports.seed = function(knex) {
      return knex('status').insert([
        { id: 1, code: 'active', label: 'Active', ...time },
        { id: 2, code: 'deleted', label: 'Deleted', ...time },
      ]).then(() => {
          return knex('gender').insert([
              { id: 1, code: 'male', label: 'Male', ...time },
              { id: 2, code: 'female', label: 'Female', ...time },
          ]);
      }).then(() => {
          return knex('interest').insert([
              { id: 1, code: 'music', label: 'Music', ...time },
              { id: 2, code: 'fashion', label: 'Fashion', ...time },
          ]);
      }).then(() => {
          return knex('age').insert([
              { id: 1, code: 'zero_to_fifteen', label: '0 - 15', ...time, min: 0, max: 15 },
              { id: 2, code: 'sixteen_to_thirty', label: '16 - 30', ...time, min: 16, max: 30 }
          ]);
      }).then(() => {
          return knex('budget').insert([
              { id: 1, code: 'zero_to_five_thousand', label: '0 - 5k', ...time, min: 0, max: 5000 },
              { id: 2, code: 'six_to_twenty_thousand', label: '6 - 20k', ...time, min: 6000, max: 20000 }
          ]);
      }).then(() => {
          return knex('gift').insert([
              {
                  id: 1,
                  product_link: 'https://www.konga.com/product/t-and-g-tg106-portable-wireless-v4-2-stereo-bluetooth-speaker-blue-3949653',
                  title: 'T & G TG106 Portable Wireless V4.2 Stereo Bluetooth Speaker - Blue',
                  price: 8999,
                  image_url: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/I/54334_1527918587.jpg',
                  ...time
              },
              {
                  id: 2,
                  product_link: 'https://www.konga.com/product/ladies-high-neck-striped-dress-4119834',
                  title: 'Ladies High Neck Striped Dress',
                  price: 1800,
                  image_url: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/O/135117_1542126773.jpg',
                  ...time
              },
          ]);
      }).then(() => {
          return knex('gift_selection').insert([
              { gift_id: 1, gender_id: 1, age_id: 1, interest_id: 1, budget_id: 2 },
              { gift_id: 2, gender_id: 2, age_id: 1, interest_id: 2, budget_id: 1 }
          ]);
      })
};
