<p align="center"><a href="https://dawjavi.insjoaquimmir.cat/agarcia/LiberLogin/public/" target="_blank"><img src="https://dawjavi.insjoaquimmir.cat/agarcia/LiberLogin/resources/js/img/Logo.png" width="400"></a></p>

## Sobre Liber

Liber es un espacio dedicado a los lectores que quieran compartir opiniones de sus libros favoritos, encontrar nuevos libros con los que vivir nuevas experiencias y poder comprar directamente esos libros mediante nuestra afiliación con amazon.

## Instalar liber

El proceso de instalación de liber es muy sencillo, solo hay que seguir los siguientes pasos.
- **git clone**: git clone https://github.com/garciatoni/LiberLogin.git, Clona el repositorio https://github.com/garciatoni/LiberLogin.git en tu area de trabajo.
- **Dar permisos**:Dentro del directorio del proyecto: sudo chmod -R 755 storage || sudo chmod -R 755 bootstrap
- **Composer**: Dentro del directorio del proyecto: composer install
- **.env**: Cada nuevo proyecto con Laravel, por defecto tiene un archivo .env con los datos de configuración necesarios para el mismo, cuando utilizamos un sistema de control de versiones como git, este archivo se excluye del repositorio por medidas de seguridad. Sin embargo  existe un archivo llamado .env.example que es un ejemplo de como crear un el archivo de configuración, podemos copiar este archivo desde la consola con: cp .env.example .env
- **Base de datos**: importarla
- **npm install**: sudo npm install
- **bower install** Para instalar todas las dependencias: bower install


## Laravel Sponsors



### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
