<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :rail="miniVariant"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :href="item.href"
          :prepend-icon="item.icon"
          :title="item.title"
          exact
        />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} Khotanese Project | <a href="https://kc.khotanese.org/inspire">Content contributors</a> | Webapp was designed by oopus</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Khotanese Project',
          to: '',
          href: 'http://khotanese.org/',
        },
        {
          icon: 'mdi-crosshairs',
          title: 'Basic Search',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Advanced Search',
          to: '/advanced_search'
        },
        {
          icon: 'mdi-information',
          title: 'About This Corpus',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      title: 'Khotanese Corpus'
    }
  }
}
</script>
