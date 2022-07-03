-- Users table seeds here

-- INSERT 2 SELLERS
INSERT INTO users (name, email, password, seller) VALUES
('Ann Bui', 'an@bui.com', '123', TRUE),
('Dan', 'dan@l.com', '123', TRUE);

-- INSERT 1 BUYER
INSERT INTO users (name, email, password) VALUES
('Ricardo', 'ricardo@lhl.com', '123');
