

CREATE DATABASE IF NOT EXISTS ventas;
USE ventas

--
-- Creando la tabla control
--
CREATE TABLE control(
  parametro varchar(40) NOT NULL,
  valor int(4) NOT NULL  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

---insert ----
insert into control(parametro,valor) values('producto',11);
insert into control(parametro,valor) values('venta',1);

--
-- Creando la tabla usuarios
--

CREATE TABLE usuarios(
  codigo MEDIUMINT NOT NULL AUTO_INCREMENT,
  nombre varchar(40) NOT NULL,
  apellido varchar(40) NOT NULL,
  usuario varchar(40) NOT NULL,
  clave varchar(40) NOT NULL,
  PRIMARY KEY  (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

---- insert-----
insert into usuarios(nombre,apellido,usuario,clave) values('Jose','Gonzales','jgonzales','12345');
insert into usuarios(nombre,apellido,usuario,clave) values('Ricardo','Miranda','rmiranda','12345');
insert into usuarios(nombre,apellido,usuario,clave) values('Gustavo','Coronel','gcoronel','12345');
insert into usuarios(nombre,apellido,usuario,clave) values('Claudia','Silva','csilva','12345');

--
-- Creando la tabla producto
--

CREATE TABLE producto (
  codigoProducto int(11) NOT NULL,
  nombre varchar(100) NOT NULL,
  precio decimal(18,2) NOT NULL,
  stock int(11) NOT NULL,
  PRIMARY KEY  (codigoProducto)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Creando la tabla venta
--

CREATE TABLE venta (
  codigoVenta int(11) NOT NULL,
  cliente varchar(100) NOT NULL,
  fecha datetime NOT NULL,
  PRIMARY KEY  (codigoVenta)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--tabla detalleventa----

CREATE TABLE detalleventa (
  codigoVenta int(11) NOT NULL,
  codigoProducto int(11) NOT NULL,
  cantidad int(11) NOT NULL,
  precio decimal(18,2) NOT NULL,
  descuento decimal(18,2) NOT NULL,
  PRIMARY KEY  (codigoVenta,codigoProducto),
  KEY FK_DetalleVenta_Producto (codigoProducto),
  CONSTRAINT FK_DetalleVenta_Producto FOREIGN KEY (codigoProducto) REFERENCES producto (codigoProducto),
  CONSTRAINT FK_DetalleVenta_Venta FOREIGN KEY (codigoVenta) REFERENCES venta (codigoVenta)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- insertar datos de producto----
insert into producto(codigoProducto,nombre,precio,stock) values(1,'MONITORES',150,50);
insert into producto(codigoProducto,nombre,precio,stock) values(2,'TECLADOS',30,20);
insert into producto(codigoProducto,nombre,precio,stock) values(3,'LECTORAS DVD',60,30);
insert into producto(codigoProducto,nombre,precio,stock) values(4,'MOUSE',25,50);
insert into producto(codigoProducto,nombre,precio,stock) values(5,'MEMORIAS DIM',120,40);
insert into producto(codigoProducto,nombre,precio,stock) values(6,'MEMORIAS USB',30,20);
insert into producto(codigoProducto,nombre,precio,stock) values(7,'IMPRESORAS',250,10);
insert into producto(codigoProducto,nombre,precio,stock) values(8,'AUDIFONOS',20,10);
insert into producto(codigoProducto,nombre,precio,stock) values(9,'MICROFONOS',25,10);
insert into producto(codigoProducto,nombre,precio,stock) values(10,'PARLANTES',20,10);
