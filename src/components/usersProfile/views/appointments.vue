<template>
  <div class="usersProfile__appointments">
    <div class="profile__nav">
      <div class="profile__nav-title">Записи на прием</div>
    </div>
    <!-- карточки с информацией о записях к врачам -->
    <div class="profile__appointments">
      <div class="appointment" v-for="(appoint, index) in appointments" :key="index">
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
  </div>
</template>


<script>
export default {
  name: "appointments",
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
.usersProfile__appointments {
  .profile__appointments {
    flex-flow: column nowrap;
    max-height: 40.3125rem;
    max-width: 32.6575rem;
    overflow: auto;
    .appointment {
      margin: 0 0 0.9375rem 1.25rem;
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