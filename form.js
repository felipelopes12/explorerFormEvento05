const senha = document.querySelector('chave');
const img = document.querySelector('img');

img.onclick = () => 
{
  if (senha.type = 'password')
  {
  senha.type = 'text'
  img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SA14-A-zoRaiJ2GdUiESsisaFiHNYrUZtjtjZqnth0D_KdfkwzQWIdCjbzhAoYKPTvs&usqp=CAU'
  }
  else
  {
    senha.type = 'password'
    img.src = 'https://icon-library.com/images/icon-eyes/icon-eyes-12.jpg'
  }
}