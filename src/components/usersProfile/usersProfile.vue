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
          <div class="user__photo">
            <img class="user__photo__img" src="@/assets/user.png" alt="user" />
          </div>
          <b-nav-item-dropdown class="header__menu__user" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <!-- меню приложения -->
    <div class="usersProfile__menu">
      <b-nav vertical class="navigation">
        <b-nav-item to="/profile" class="navigation__item active">
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
.usersProfile > * {
  flex: 1 100%;
}
@media all and (min-width: 600px) {
  .usersProfile__menu {
    flex: 1 0 0;
    height: 100vh;
  }
}

@media all and (min-width: 300px) {
  .usersProfile__content {
    flex: 3 0px;
    order: 2;
  }
  .usersProfile__menu {
    order: 1;
  }
}
//Скрывает стрелку дропдауна от бутстрапа
#__BVID__9__BV_toggle_ {
  outline: none;
  color: transparent;
  position: relative;
  margin: 0 1.55rem 0 0.6875rem;
  right: 0;
  width: 1rem;
  height: 1rem;
  background: no-repeat url("../../assets/drop.svg");
}
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
      align-items: center;
    }
    &__user {
      margin-left: 2.75rem;
    }
    &__item {
      margin-left: 0.25rem;
    }
    .user__photo {
      position: relative;
      width: 3.0625rem;
      height: 3.0625rem;
      margin-left: 0.625rem;
      margin-right: -3rem;
      border: 1px solid white;
      border-radius: 25px;
      &__img {
        border-radius: 25px;
        margin: 0.0625rem 0 0 0.0625rem;
        width: 2.8125rem;
        height: 2.8125rem;
      }
    }
  }
  &__logo {
    font-size: 14px;
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
  min-width: 85.375rem;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  background: #fcfcfc;
  &__menu {
    max-width: 11.875rem;
    width: 11.875rem;
    background: #003b72;
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
    &:hover {
      text-decoration: none;
      color: #fcfcfc;
      opacity: 0.8;
    }
    &-img {
      margin-right: 0.875rem;
    }
  }
  &__logo {
    margin: 1rem 0 0 1.25rem;
  }
}
</style>