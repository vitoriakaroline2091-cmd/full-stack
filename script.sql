-- Cria o banco de dados onde vamos trabalhar
create database sistema_produtos;

use sistema_produtos;

-- Cria a tabela 'produtos' com algumas colunas básicas
create table  produtos (
id int auto_increment primary key, -- ID ÚNICO
nome varchar (100) not null, -- Nome produto
email varchar (120) not null, -- Email (exemplo genérico)
telefone varchar (20), -- Telefone 
cpf varchar (14), -- cpf
endereco varchar (150) -- Endereco simmples
);
-- Insere dois registro
insert into produtos (nome, email, telefone, cpf, endereco) values
('Eduardo Ramos', 'edu.ramos@orutos.com', '1234567-777', '111.444.77-00','Rua Orutos F'),
('Juliana Clara', 'juliana@orutos.com', '7777628-789','777.333.777-11', 'Rua Orutos');

-- Seleciona o registro onde o id = 1
select * from produtos  where id = 2;

select * from produtos;

