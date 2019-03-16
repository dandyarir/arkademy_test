--Jawaban no 6 Soal E
--Question A)
insert into `categories` (`id`,`name`) values
   ('1', 'Peralatan Mandi'),
   ('2', 'Mie Instan'),
   ('3', 'Olahan Daging');


insert into `products` (`id`, `name`, `category_id`) VALUES
   ('1', 'Sampo', '1'),
   ('2', 'Sikat Gigi', '1'),
   ('3', 'Indomi', '2'),
   ('4', 'mie sedap', '2'),
   ('5', 'Nuget', '3');

--Question B)
SELECT categories.id,categories.name,products.name FROM `products`
JOIN `categories` on categories.id = products.category_id
GROUP BY categories.id