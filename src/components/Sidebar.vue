<!-- <template>
    <div class="sidebar">
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <router-link :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        menuItems: [
          { name: '首页', link: '/' },
          { name: '关于我们', link: '/about' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 100vh;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin: 20px 0;
  }
  
  .sidebar a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  </style> -->
  
  <template>
    <div class="sidebar">
      <ul>
        <li v-for="item in menuItems" :key="item.name" :class="{ 'has-dropdown': item.children && item.children.length > 0 }">
          <!-- 主菜单项 -->
          <router-link v-if="!item.children || item.children.length === 0" :to="item.link">{{ item.name }}</router-link>
          <span v-else>{{ item.name }}</span>
  
          <!-- 下拉菜单 -->
          <ul v-if="item.children && item.children.length > 0">
            <li v-for="child in item.children" :key="child.name">
              <router-link :to="child.link">{{ child.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        menuItems: [
            {
            name: 'Data Analysis',
            link: '/dataanalysis',
          },
          {
            name: 'Home',
            link: '/',
            children: [
              { name: '子页面1', link: '/child1' },
              { name: '子页面2', link: '/child2' }
            ]
          },
          {
            name: 'About',
            link: '/about',
            children: [
              { name: '团队', link: '/team' },
              { name: '联系方式', link: '/contact' }
            ]
          },
          
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* 可以添加样式 */
  .has-dropdown ul {
    display: none;
    list-style-type: none;
    padding-left: 0;
    margin-top: 5px;
  }
  
  .has-dropdown:hover ul {
    display: block;
  }
  </style>
  
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 100vh;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin: 20px 0;
  }
  
  .sidebar a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  </style>
  