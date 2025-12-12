-- Criar banco de dados
create database copa_mundo;

use copa_mundo;

-- Cria a tabela 'selecoes' com tres colunas
create table selecoes (
id int auto_increment primary key, -- ID ÚNICO onde aumenta automaticamente
selecao varchar(100) not null, -- nome  da selecao, texto ate 100 caracteres
grupo varchar(1) not null  -- grupo da selecao , apenas uma letra (A,B,C)
);

select * from selecoes;

-- insere varias selecoes de uma vez na tabela
insert into selecoes (selecao, grupo) values
  ('Brasil', 'A'),
  ('Franca', 'B'),
  ('Ilhas Salomao', 'C'),
  ('Nigeria', 'D'),
  ('Nova Zelandia', 'E'),
  ('Japao', 'F');
  
  insert into selecoes  (selecao, grupo) values
  ('Chile', 'G'),
  ('Bolivia', 'H');
  
  drop table selecoes;
  
  
 
