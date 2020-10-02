<template>
  <div id="app">
     <section class="main">
        <header class="main-header">
           <div class="main-header__logo">
              <img :src="require('./assets/img/Logo_original_RGB.png')" alt="Logo">
           </div>
           <nav class="main-header__navigation">
              <ul>
                 <li><router-link to="/">home</router-link></li>
                 <li><router-link to="/about">about us</router-link></li>
              </ul>
           </nav>
        </header>
        <div class="main-content">
           <router-view></router-view>
        </div>
     </section>
  </div>
</template>

<style lang="scss">
   @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');

   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   ul{
      list-style-type: none;
   }

   a{
      text-decoration: none;
      color: #000;
   }

   body{
      font-family: 'Rubik', sans-serif;
   }

   .main{
      height: 100vh;

      &-header{
         display: flex;
         justify-content: space-between;
         padding: 50px 110px;
         margin-bottom: 22px;

         &__logo{

         }

         & img{
            height: 50px;
         }

         &__navigation{
            display: flex;
            align-items: flex-end;

            & ul{
               display: flex;

               & li{
                  font-size: 28px;
                  text-transform: uppercase;

                  font-weight: 700;

                  &:first-child{
                     margin-right: 60px;
                  }
               }
            }

         }
      }

      &-content{
         width: 100%;
         height: auto;
      }
   }
</style>
