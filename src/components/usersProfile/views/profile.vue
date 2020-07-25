<template>
  <div class="usersProfile__profile">
    <div class="profile__nav">
      <div class="profile__nav-title">Записи на прием</div>
    </div>
    <div class="profile__appointments">
      <div class="appointment" v-for="(appoint, index) in appointments" :key="index">
        <div class="appointment__content" v-if="index <= 1">
          <div class="appointment__time">{{appoint.day}} {{appoint.date}} | {{appoint.time}}</div>
          <div class="appointment__place">{{appoint.place}}</div>
          <div class="appointment__doctor">
            <div class="appointment__doctor__name">{{appoint.doctor.name}}</div>
            <div class="appointment__doctor__prof">{{appoint.doctor.prof}}</div>
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
            'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к.1, лит. А',
          doctor: {
            name: "Малушко Т.Н.",
            prof: "Хирургия",
          },
        },
        {
          day: "Понедельник",
          date: "15.06.20",
          time: "18:30",
          place:
            'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к.1, лит. А',
          doctor: {
            name: "Харьков В.С.",
            prof: "Терапевтическое отделение",
          },
        },
        {
          day: "Вторник",
          date: "30.06.20",
          time: "12:10",
          place:
            'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к.1, лит. А',
          doctor: {
            name: "Малушко Т.Н.",
            prof: "Хирургия",
          },
        },
        {
          day: "Среда",
          date: "01.07.20",
          time: "15:30",
          place:
            'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к.1, лит. А',
          doctor: {
            name: "Малушко Т.Н.",
            prof: "Хирургия",
          },
        },
        {
          day: "Четверг",
          date: "02.07.20",
          time: "16:45",
          place:
            'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к.1, лит. А',
          doctor: {
            name: "Харьков В.С.",
            prof: "Терапевтическое отделение",
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
  flex-flow: row wrap;
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
    }
  }
}
</style>