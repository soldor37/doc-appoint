<template>
  <div class="usersProfile__appointments">
    <div class="profile__nav">
      <router-link to="/usersProfile/profile">
        <img src="@/assets/arrow_left.svg" alt="arrow_left" />
        <div class="profile__nav-title">Мои записи</div>
      </router-link>
    </div>
    <div class="usersProfile__content">
      <!-- карточки с информацией о записях к врачам -->
      <div class="profile__appointments">
        <div v-if="show" class="reload" @click="reloadAps()">Показать все записи</div>
        <div class="appointment" v-for="(appoint, index) in tmpAppointments" :key="index">
          <div class="appointment__content">
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
      </div>
      <!-- Календарь -->
      <Calendar v-bind:apsCount="apsCount" v-on:dateSelected="pickDate($event)"></Calendar>
    </div>
  </div>
</template>


<script>
import Calendar from "./components/calendar/calendar.vue";
export default {
  name: "appointments",
  components: {
    Calendar,
  },
  data() {
    return {
      selectedDate: {},
      apsCount: [
        {
          count: 1,
          day: "01",
          month: "01",
          year: "20",
        },
      ],
      //основной массив с данными по записям, получение с сервера(типо)
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
      //временный массив с записями, по которому выводятся карточки
      tmpAppointments: [],
      //для отображения/скрытия элементов
      show: false,
    };
  },
  created: function () {
    this.tmpAppointments = this.appointments;
    this.getCount();
  },
  methods: {
    pickDate(picked) {
      let app = this;
      let apsDates = [];
      //получаем объект в удобном виде
      this.appointments.map((item) => {
        apsDates.push({
          index: this.appointments.indexOf(item),
          day: item.date.split(".")[0],
          month: item.date.split(".")[1].split("").pop(), //при попадании курсора на границу клетки или на число дня, дата не парсится
          year: "20" + item.date.split(".")[2], //костыль!!! что-то придумать с годом
        });
      });
      app.tmpAppointments = [];
      //сравниваем выбранную дату с датами существующих записей
      apsDates.forEach((item) => {
        if (
          item.day.match(/[1-9][0-9]?/)[0] == picked.day &&
          item.month == +picked.month + 1 &&
          item.year == picked.year
        ) {
          app.tmpAppointments.push(app.appointments[item.index]);
        }
      });
      //включаем кнопку "показать все записи"
      app.show = true;
    },
    //создает объект, в котором подсчитаны записи в один день
    getCount() {
      let app = this;
      let tmp = {};
      this.apsCount = [];
      this.appointments.forEach((item) => {
        if (tmp[item.date] == undefined) {
          tmp[item.date] = {
            count: 1,
            day: item.date.split(".")[0],
            month: item.date.split(".")[1].split("").pop(),
            year: '20' + item.date.split(".")[2],
          };
        } else {
          tmp[item.date].count += 1;
        }
      });
      //убираем ключи у объектов
      let tmpCount = [];
      for (let item in tmp){
        tmpCount.push(tmp[item])
      }
      app.apsCount = tmpCount;
    },
    reloadAps() {
      this.tmpAppointments = this.appointments;
      this.show = false;
    },
  },
};
</script>

<style lang="scss">
.usersProfile__appointments {
  display: block;
  min-width: 35rem;
  .reload {
    font-weight: normal;
    font-size: 14px;
    text-decoration: underline;
    color: #50caff;
    margin: 0 0 0.9375rem 20.875rem;
    cursor: pointer;
    &:hover {
      color: #003b72;
    }
  }
  .profile__nav {
    a {
      display: flex;
      color: black;
      &:hover {
        text-decoration: none;
      }
    }
    img {
      margin-left: 2.5rem;
    }
    &-title {
      margin-left: 0.875rem;
    }
  }
  .usersProfile__content {
    display: flex;
    flex-flow: row;
    .calendar {
      width: 35.8125rem;
      height: 30.0625rem;
      margin: 0.1875rem 0 0 2.55rem;
    }
  }
  .profile__appointments {
    flex-flow: column nowrap;
    max-height: 40.3125rem;
    max-width: 32.6575rem;
    overflow: auto;
    .appointment {
      margin: 0 1.25rem 0.9375rem 1.25rem;
      &__doctor__description {
        width: 16.6875rem;
      }
      .appointment__doctor__cancel-btn {
        position: relative;
        margin: 0;
        align-self: flex-end;
      }
    }
  }
  // скролл
  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #ebe7ff;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #003b72;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba($color: #003b72, $alpha: 0.8);
  }
}
</style>