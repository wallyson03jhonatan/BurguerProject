<template>
  <div class="footer flex column">
    <div class="flex margin-small">
      <div v-for="(data, key) in socialLinks" :key="key" class="margin-x-small social-links">
        <a :href="data.link" :title="data.text" target="_blank">
          <i :class="data.icon"></i>
        </a>
      </div>
    </div>
    <span class="text-test">Make your burguer &copy; 2023</span>
    <span>Development by Wallyson Oliveira</span>
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
      }
    },
    computed: {
      socialLinks() {
        return {
          github:   this.setData('https://github.com/wallyson03jhonatan', 'Github', 'fa-brands fa-github'),
          linkedin: this.setData('https://www.linkedin.com/in/wallyson03jhonatan/', 'Linkedin', 'fa-brands fa-linkedin'),
          email:    this.setData('wallyson03jhonatan@gmail.com' , 'Email', 'fa-regular fa-envelope'),
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
height: 25vh;
width: 100vw;
background: #222222;
color: #FCBA03;
}
.flex{
display: flex;
}
.column {
flex-direction: column;
}
.margin-x-small {
margin: 0.25rem
}
.margin-small {
margin: 0.5rem
}
.social-links {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
}
.social-links a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 25%;
  cursor: pointer;
  text-decoration: none;
  color: #f9f9f9;
}
.social-links a:hover {
  background: #f9f9f9;
  color: #222222;
  transition: background 0.3s;
}
.text-test {
  font-size: 18px;
}
</style>