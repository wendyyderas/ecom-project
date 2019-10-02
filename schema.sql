CREATE DATABASE Ecom;
USE Ecom

CREATE TABLE Persons (
    PersonID int AUTO_INCREMENT NOT NULL,
    LastName varchar(255),
    FirstName varchar(255),
    StreetNumber int NOT NULL,
    Address varchar(255),
    Email varchar(255),
    PhoneNumber bigint NOT NULL,
    Comment varchar(500),
    PRIMARY KEY(PersonID)
    );

--insterted the values into the table
INSERT INTO Persons (LastName, FirstName, StreetNumber, Address, Email, PhoneNumber, Comment)
VALUES ('Deras', 'Wendy', 1234, 'Royal Oaks Ln Thomaville NC', 'alion@someemail.com', 3455343453, 'any comment you want to add'),
('Bryson', 'Allison', 4566, 'Cotton Ln Thomaville NC', 'allisonbryson@someemail.com', 3454443353, 'any comment you want to add'),
('Jackson', 'Braxton', 8984, 'Haddington Dr Thomaville NC', 'jacksonbrax@someemail.com', 3459800000, 'any comment you want to add'),
('Dickey', 'Manuel', 5654, 'Bayview Rd Thomaville NC', 'dickeym@someemail.com', 34555553453, 'any comment you want to add'),
('Hinijosa', 'Patricia', 4898, 'Saine Oaks Ln Thomaville NC', 'hinijosapat@someemail.com', 3455643555, 'any comment you want to add'),
('Chavez', 'Jacqueline', 3434, 'Oaks Ln Thomaville NC', 'jackie@someemail.com', 3456743333, 'any comment you want to add'),
('Bernandac', 'Jasmine', 5667, 'Brooks Ln Thomaville NC', 'bernandacjas@someemail.com', 3457891011, 'any comment you want to add'),
('Rodriguez', 'Karla', 7777, 'Bros Ln Thomaville NC', 'karlarod@someemail.com', 3451211314, 'any comment you want to add'),
('Santillian', 'Perla', 8712, 'Kays Way Ln Thomaville NC', 'persanti@someemail.com', 3453445674, 'any comment you want to add'),
('Cervantez', 'Ruby', 4565, 'Broadway Ln Thomaville NC', 'cervantezruby@someemail.com', 3453212222, 'any comment you want to add')


SELECT * FROM Persons;

-- //creating products TABLE
CREATE TABLE Products (
    ProductsID int AUTO_INCREMENT NOT NULL,
    Description varchar(255),
    ProductName varchar(255),
    ProductType varchar(255),
	ShelfLife int NOT NULL,
    Price int,
    Stock int NOT NULL,
    UrlImg varchar(255),
    PRIMARY KEY(ProductsID)

);
-- list of products 
 INSERT INTO Products (Description, ProductName, ProductType, ShelfLife, Price, Stock, UrlImg)
VALUES ('Drip cakes for every occasion. We offer: Double Chocolate; Tuxedo Cake (Vanilla Frosting with Chocolate Ganache); Chocolate Mint Oreo.', 'Drip Cake', 'Cake', 5, 69, 3, 'https://bit.ly/30XuxlT'),
('This cake is a WOW! Soft cake bursting with coconut flavor--toasted coconut inside and out and a creamy cream cheese frosting', 'Cocunut Cake', 'Cake', 5, 55, 10,'https://bit.ly/32Ybz0f'),
('Layers of our amazing brownies—yes, the ones with the crisp crackly top and fudgy center, covered in our creamy Fudge frosting.', 'Brownie Cake', 'Cake', 10, 60, 20,'https://bit.ly/2Ystyc1'),
('Vanilla cake and icing, dipped in a pink chocolaty coating with white sprinkles.', 'VanillaPop', 'CakePop', 10, 12, 45, 'https://bit.ly/2OkPYvO'),
('Chocolate cake mixed with chocolate butter cream, dipped in dark chocolate. ', 'ChocolatePoP', 'CakePop', 10, 12, 34, 'https://bit.ly/2GvJRym'),
('Confeetti cake, dipped in white chocolate and topped with sugar sprinkles.', 'BirthdayPop', 'CakePop', 10, 12, 30, 'https://bit.ly/2GxKxU9'),
('Flourless dark chocolate cake topped with a chocolate ganache rose and powdered sugar.', 'Chocolate', 'Cupcakes', 7, 30, 20,'https://bit.ly/2Ytuy3p'),
('These Pumpkin cupcakes are no exception and I could just sit with a spoon and eat this creamy good cupcake.', 'Pumpkin', 'Cupcakes', 7, 30, 20, 'https://bit.ly/2YnwVkf'),
('Vanilla cake decorated as a unicorn, topped with a swirl of cream cheese frosting.', 'Unicorn', 'Cupcakes', 7, 30, 20, 'https://bit.ly/2Mh3UEm'),
('SeaShell is perfect balance of salty and sweet. Sea Salt Caramel Buttercreme with a Creamy Caramel Center.', 'SeaShell', 'Macaroons', 5, 25, 35, 'https://bit.ly/2JVGGCi'),
('Mactella is a chocolate shell with toasted hazelnut on top and a nutella infused milk chocolate ganache filling.', 'Cocoa', 'Macaroons', 5, 25, 35, 'https://bit.ly/32XfH0q'),
('Perfectly pink shells filled with a light buttercream and a strawberry fruit compote center.', 'Rose', 'Macaroons', 5, 25, 35, 'https://bit.ly/2SGlAug')


SELECT * FROM Products;

-- creating orders table
CREATE TABLE Prices (
    PriceID int AUTO_INCREMENT NOT NULL,
	TotalPrice int NOT NULL,
    ProductID int NOT NULL,
    Stock int NOT NULL,
    PersonID int NOT NULL,
    PRIMARY KEY(PriceID)
);
SELCT * FROM Prices;



