CREATE DATABASE Ecom;
USE Ecom

CREATE TABLE Persons (
    PersonID int AUTO_INCREMENT NOT NULL,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    Email varchar(255),
    PhoneNumber int NOT NULL,
    Comment varchar(500),
    PRIMARY KEY(PersonID)
    );
    -- added streetnumner since it was an int
ALTER TABLE Persons ADD COLUMN StreetNumber int NOT NULL
added the values to my contact page/ peoples table
INSERT INTO Persons (LastName, FirstName, StreetNumber, Address, Email, PhoneNumber, Comment)
VALUES ('Deras', 'Wendy', 1234, 'Royal Oaks Ln Thomaville NC', 'alion@someemail.com', 345-534-3453, 'any comment you want to add'),
('Bryson', 'Allison', 4566, 'Cotton Ln Thomaville NC', 'allisonbryson@someemail.com', 345-444-3353, 'any comment you want to add'),
('Jackson', 'Braxton', 8984, 'Haddington Dr Thomaville NC', 'jacksonbrax@someemail.com', 345-980-0000, 'any comment you want to add'),
('Dickey', 'Manuel', 5654, 'Bayview Rd Thomaville NC', 'dickeym@someemail.com', 345-5555-3453, 'any comment you want to add'),
('Hinijosa', 'Patricia', 4898, 'Saine Oaks Ln Thomaville NC', 'hinijosapat@someemail.com', 345-564-3555, 'any comment you want to add'),
('Chavez', 'Jacqueline', 3434, 'Oaks Ln Thomaville NC', 'jackie@someemail.com', 345-674-3333, 'any comment you want to add'),
('Bernandac', 'Jasmine', 5667, 'Brooks Ln Thomaville NC', 'bernandacjas@someemail.com', 345-789-1011, 'any comment you want to add'),
('Rodriguez', 'Karla', 7777, 'Bros Ln Thomaville NC', 'karlarod@someemail.com', 345-121-1314, 'any comment you want to add'),
('Santillian', 'Perla', 8712, 'Kays Way Ln Thomaville NC', 'persanti@someemail.com', 345-344-5674, 'any comment you want to add'),
('Cervantez', 'Ruby', 4565, 'Broadway Ln Thomaville NC', 'cervantezruby@someemail.com', 345-321-2222, 'any comment you want to add');


SELECT * FROM Persons;

-- //creating products TABLE
CREATE TABLE Products (
    ProductsID int AUTO_INCREMENT NOT NULL,
    Description varchar(255),
    ProductName varchar(255),
    ProductType varchar(255),
	ShelfLife int NOT NULL,
    Price int,
    Stock int NOT NULL
    PRIMARY KEY(ProductsID)

);
-- list of products
 INSERT INTO Products (Description, ProductName, ProductType, ShelfLife, Price, Stock)
VALUES ('Drip cakes for every occasion. We offer: Double Chocolate; Tuxedo Cake (Vanilla Frosting with Chocolate Ganache); Chocolate Mint Oreo.', 'Drip Cake', 'Cake', 5, 69, 3),
('This cake is a WOW! Soft cake bursting with coconut flavor--toasted coconut inside and out and a creamy cream cheese frosting', 'Cocunut Cake', 'Cake', 5, 55, 10),
('Layers of our amazing brownies—yes, the ones with the crisp crackly top and fudgy center, covered in our creamy Fudge frosting.', 'Brownie Cake', 'Cake', 10, 60, 20),
('Vanilla cake and icing, dipped in a pink chocolaty coating with white sprinkles.', 'VanillaPop', 'CakePop', 10, 12, 45),
('Chocolate cake mixed with chocolate butter cream, dipped in dark chocolate. ', 'ChocolatePoP', 'CakePop', 10, 12, 34),
('Confeetti cake, dipped in white chocolate and topped with sugar sprinkles.', 'BirthdayPop', 'CakePop', 10, 12, 30),
('Flourless dark chocolate cake topped with a chocolate ganache rose and powdered sugar.', 'Chocolate', 'Cupcakes', 7, 30, 20),
('These Pumpkin cupcakes are no exception and I could just sit with a spoon and eat this creamy good cupcake.', 'Pumpkin', 'Cupcakes', 7, 30, 20),
('Vanilla cake decorated as a unicorn, topped with a swirl of cream cheese frosting.', 'Unicorn', 'Cupcakes', 7, 30, 20),
('SeaShell is perfect balance of salty and sweet. Sea Salt Caramel Buttercreme with a Creamy Caramel Center.', 'SeaShell', 'Macaroons', 5, 25, 35),
('Mactella is a chocolate shell with toasted hazelnut on top and a nutella infused milk chocolate ganache filling.', 'Cocoa', 'Macaroons', 5, 25, 35),
('Perfectly pink shells filled with a light buttercream and a strawberry fruit compote center.', 'Rose', 'Macaroons', 5, 25, 35)


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



