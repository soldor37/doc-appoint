<template>
  <div class="usersProfile">
    <div class="header">
      <div class="header__logo">Логотип</div>
      <b-navbar class="header__menu">
        <div class="header__menu__title" href="#">Мой профиль</div>
        <b-navbar-nav class="header__menu__options">
          <b-nav-item class="header__menu__item" href="#">
            <img src="@/assets/search.svg" alt="search" />
          </b-nav-item>
          <b-nav-item class="header__menu__item" href="#">
            <img src="@/assets/bell.svg" alt="bell" />
          </b-nav-item>
          <b-nav-item class="header__menu__item" href="#">
            <img src="@/assets/eye.svg" alt="eye" />
          </b-nav-item>
          <b-nav-item-dropdown class="header__menu__user" text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="usersProfile__menu">
      <b-nav vertical class="navigation">
        <b-nav-item class="navigation__item active">
          <img src="@/assets/heart.svg" alt="heart" /> Профиль
        </b-nav-item>
        <b-nav-item class="navigation__item">
          <img src="@/assets/steth.svg" alt="steth" />Врачи и клиники
        </b-nav-item>
        <b-nav-item class="navigation__item">
          <img src="@/assets/speak.svg" alt="speak" />Сообщения
        </b-nav-item>
        <b-nav-item class="navigation__item">
          <img src="@/assets/test.svg" alt="test" />Тестирование
        </b-nav-item>
        <b-nav-item class="navigation__item">
          <img src="@/assets/book.svg" alt="heart" />Полезно знать
        </b-nav-item>
        <button class="navigation__req-btn">Подать заявку</button>
        <a href="#" class="navigation__help">
          <img src="@/assets/help.svg" class="navigation__help-img" alt="help" />Помощь
        </a>
        <div class="navigation__logo">
          <img src="@/assets/appvelox.png" alt="appvelox" />
        </div>
      </b-nav>
    </div>
    <div class="usersProfile__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  width: 100%;
  display: flex;
  max-height: 3.4375rem;
  &__menu {
    width: 100%;
    min-width: 73.5rem;
    background: #50caff;
    &__title {
      font-size: 28px;
      color: #ffffff;
      margin-left: 1.5rem;
    }
    &__options {
      margin-left: auto;
    }
    &__user {
      margin-left: 2.75rem;
    }
    &__item {
      margin-left: 0.25rem;
    }
  }
  &__logo {
    min-width: 11.875rem;
    display: flex;
    background: #003b72;
    color: #ffffff;
    align-items: center;
    padding-left: 1.1875rem;
  }
}
.active {
  background: #fcfcfc;
}

.usersProfile {
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  background: #fcfcfc;
  &__menu {
    height: 100vh; //костыль
    width: 11.875rem;
    background: #003b72;
  }
  &__content {
  }
}

.navigation {
  font-size: 14px;
  font-weight: normal;
  &__item {
    height: 2.875rem;
    margin-bottom: 0.625rem;
    display: flex;
    align-items: center;
    a {
      color: #ffffff;
    }
    img {
      margin-left: 0.25rem;
      margin-right: 0.8125rem;
    }
  }
  &__item:hover {
    background: #fcfcfc;
    a {
      color: #7761ff;
    }
  }
  .active {
    a {
      color: #7761ff;
    }
  }
  .navigation__req-btn {
    width: 9.375rem;
    height: 2.5rem;
    background: #7761ff;
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    border-radius: 5px;
    border: none;
    margin: 0 0 0.375rem 1.25rem;
    outline: none;
    &:hover {
      opacity: 0.8;
    }
  }
  &__help {
    text-decoration: none;
    color: #ffffff;
    font-weight: normal;
    font-size: 14px;
    margin: 19.5625rem 0 0 1.25rem;
    &:hover{
      text-decoration: none;
      color: #fcfcfc;
      opacity: 0.8;
    }
    &-img{
      margin-right: 0.875rem;
    }
  }
  &__logo{
        margin: 1rem 0 0 1.25rem;
  }
}
</style>