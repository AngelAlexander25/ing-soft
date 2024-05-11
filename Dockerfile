# Usar una imagen base ligera, Nginx es común para servir páginas estáticas
FROM nginx:alpine

# Copiar los archivos estáticos al contenedor
# Ajusta la línea COPY para que apunte al directorio raíz donde están los archivos HTML, CSS, etc.
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
