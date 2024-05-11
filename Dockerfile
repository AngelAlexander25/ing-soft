# Usar una imagen base ligera, Nginx es común para servir páginas estáticas
FROM nginx:alpine

# Copiar los archivos estáticos al contenedor
COPY ./www /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# El comando por defecto de Nginx ya arranca el servidor, no es necesario agregar CMD
