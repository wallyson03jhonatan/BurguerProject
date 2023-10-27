<template>
  <div class="footer">
    <div class="flex column">

      <div class="social-container">
        <div v-for="(data, key) in socialLinks" :key="key" class="margin-x-small social-links">
          <a :href="data.link" :title="data.text" target="_blank">
            <i :class="data.icon"></i>
          </a>
        </div>
      </div>

      <p class="text-small text-footer padding-x-small">
        Developed by
        <strong><a :href="socialLinks.github.link">Wallyson Oliveira</a></strong>
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  methods: {
    setData(link, text, icon) {
      return {
        link,
        text,
        icon,
      }
    },
  },
  computed: {
    socialLinks() {
      return {
        github: this.setData('https://github.com/wallyson03jhonatan', 'Github', 'fa-brands fa-github'),
        linkedin: this.setData('https://www.linkedin.com/in/wallyson03jhonatan/', 'Linkedin', 'fa-brands fa-linkedin'),
        email: this.setData('wallyson03jhonatan@gmail.com', 'Email', 'fa-regular fa-envelope'),
      };
    },
  },
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #222222;
  color: #FCBA03;
}

.flex {
  display: flex;
}

.column {
  flex-direction: column;
}

.social-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.social-links {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
}

.social-links a {
  display: flex;
  align-items: center;
  padding: .25rem;
  border-radius: 25%;
  color: #f9f9f9;
}

.social-links a:hover {
  background: #f9f9f9;
  color: #222222;
  transition: .5s;
}

.text-footer a {
  color: #FCBA03;
}

.text-footer a:hover {
  background-color: hsla(53, 45%, 30%, 0.29);
}
</style>