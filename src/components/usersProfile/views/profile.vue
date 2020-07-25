<template>
  <div class="usersProfile__profile">
    <div class="profile__nav">
      <div class="profile__nav-title">Записи на прием</div>
    </div>
    <!-- карточки с информацией о записях к врачам -->
    <div class="profile__appointments">
      <div class="appointment" v-for="(appoint, index) in appointments" :key="index">
        <div class="appointment__content" v-if="index <= 1">
          <div class="appointment__time">{{appoint.day}} {{appoint.date}} | {{appoint.time}}</div>
          <div class="appointment__place">{{appoint.place}}</div>
          <div class="appointment__doctor">
            <div class="appointment__doctor__photo">
              <img :src="require(`@/assets/doctors/${appoint.doctor.id}.png`)" alt="doctorPhoto" />
            </div>
            <div class="appointment__doctor__description">
              <div class="appointment__doctor__name">{{appoint.doctor.name}}</div>
              <div class="appointment__doctor__prof">{{appoint.doctor.prof}}</div>
            </div>
            <button class="appointment__doctor__cancel-btn">Отменить</button>
          </div>
        </div>
      </div>
      <div class="profile__appointments__more">
        <p class="count">Еще {{appointments.length-2}} записи</p>
        <router-link class="more" to="appointments">Подробнее</router-link>
      </div>
    </div>
    <!-- карточки с действиями на странице в профиле пользователя -->
    <div class="profile__info">
      <p class="profile__info__title">Электронная карта</p>
      <div class="profile__info__options">
        <div class="option patient">
          <div class="option__logo">
            <img src="@/assets/info.svg" alt="info" />
          </div>
          <div class="option__descript">
            <p class="option__title">Информация о пациенте</p>
            <hr />
            <ul class="option__text">
              <li>Ваши личные данные</li>
              <li>Рекомендации врачей</li>
              <li>История болезней</li>
            </ul>
          </div>
        </div>
        <div class="option results">
          <div class="option__logo">
            <img src="@/assets/info.svg" alt="info" />
          </div>
          <div class="option__descript">
            <p class="option__title">Результаты анализов</p>
            <hr />
            <p class="option__text">Вы можете узнать здесь результаты своих анализов</p>
          </div>
        </div>
        <div class="option addInfo">
          <div class="option__logo">
            <img src="@/assets/info.svg" alt="info" />
          </div>
          <div class="option__descript">
            <p class="option__title">Добавить информацию</p>
            <hr />
            <p class="option__text">Добавляйте в свою электронную медицинскую карту новые данные</p>
          </div>
        </div>
        <div class="option hist">
          <div class="option__logo">
            <img src="@/assets/info.svg" alt="info" />
          </div>
          <div class="option__descript">
            <p class="option__title">История приемов</p>
            <hr />
            <p class="option__text">Вся информация о полученных услугах за все время хранится здесь</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      appointments: [
        {
          day: "Понедельник",
          date: "15.06.20",
          time: "15:30",
          place:
            'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
          doctor: {
            name: "Малушко Т. Н.",
            prof: "Хирургия",
            id: 1,
          },
        },
        {
          day: "Понедельник",
          date: "15.06.20",
          time: "18:30",
          place:
            'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
          doctor: {
            name: "Харьков В. С.",
            prof: "Терапевтическое отделение",
            id: 2,
          },
        },
        {
          day: "Вторник",
          date: "30.06.20",
          time: "12:10",
          place:
            'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
          doctor: {
            name: "Малушко Т. Н.",
            prof: "Хирургия",
            id: 1,
          },
        },
        {
          day: "Среда",
          date: "01.07.20",
          time: "15:30",
          place:
            'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
          doctor: {
            name: "Малушко Т. Н.",
            prof: "Хирургия",
            id: 1,
          },
        },
        {
          day: "Четверг",
          date: "02.07.20",
          time: "16:45",
          place:
            'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
          doctor: {
            name: "Харьков В. С.",
            prof: "Терапевтическое отделение",
            id: 2,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.profile__nav {
  display: flex;
  height: 2.875rem;
  //   min-width: 1176px;
  align-items: center;
  &-title {
    display: flex;
    margin-left: 2.5rem;
    margin-top: 0.1875rem;
    align-items: center;
  }
}
.profile__appointments {
  display: flex;
  flex-flow: row nowrap;
  .appointment {
    margin: 0 0 0 1.25rem;
    &__content {
      width: 29.6875rem;
      height: 10.875rem;
      background: #ffffff;
      box-shadow: 0px 0px 5px #ebe7ff;
      border-radius: 5px;
      padding: 1.375rem 0 0 1.1875rem;
    }
    &__time {
      font-weight: 500;
      font-size: 16px;
    }
    &__place {
      width: 17.5rem;
      font-weight: 300;
      font-size: 14px;
    }
    &__doctor {
      display: flex;
      margin-top: 0.5625rem;
      &__photo {
        width: 3.75rem;
        height: 3.75rem;
      }
      &__description {
        margin: 0.75rem 0 0 0.6875rem;
      }
      &__name {
        font-weight: 500;
        font-size: 14px;
        color: #000000;
      }
      &__prof {
        font-weight: normal;
        font-size: 14px;
        color: #ebe7ff;
      }
      &__cancel-btn {
        position: absolute;
        margin: 1.25rem 0 0 21.125rem;
        width: 6.125rem;
        height: 2.5rem;
        background: #7761ff;
        color: #ffffff;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        border-radius: 5px;
        border: none;
        outline: none;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  &__more {
    text-align: center;
    position: absolute;
    margin: 4.4rem 0 0 63.1rem;
    .count {
      font-weight: normal;
      font-size: 14px;
      color: #000000;
      margin: 0;
    }
    .more {
      font-weight: normal;
      font-size: 14px;
      text-decoration: underline;
      color: #50caff;
      &:hover {
        color: #003b72;
      }
    }
  }
}
.profile__info {
  &__title {
    color: #000000;
    font-weight: normal;
    margin: 2.25rem 0 0 2.5rem;
  }
  &__options {
    display: flex;
    flex-flow: row wrap;
    margin: 0.75rem 0 0 1.1875rem;
    .option {
      display: flex;
      flex-flow: row wrap;
      width: 33.75rem;
      height: 11.4375rem;
      margin: 0 0.9375rem 1rem 0;
      background: #ffffff;
      box-shadow: 0px 0px 5px #ebe7ff;
      border-radius: 5px;
      &__logo {
        display: flex;
        width: 8.3125rem;
        height: 11.4375rem;
        justify-content: center;
        align-items: center;
      }
      &__descript {
        width: 25.4375rem;
      }
      &__title {
        font-weight: normal;
        font-size: 28px;
        margin: 1rem 0 0 2.3125rem;
      }
      &__text {
      }
    }
  }
}
hr {
  margin-top: 0;
  width: 20.9375rem;
  color: #50caff;
  background-color: #50caff;
  border-top: 2px solid #50caff; //не робит
}
</style>