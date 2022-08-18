<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{red:item.price>200}">{{item.price}}</td>
            <td>{{item.time}}</td>
            <td><a href="#"  @click.prevent="delitem(item.id)">删除</a></td>
          </tr>
        </tbody>

        <tfoot v-if="list.length==0? true:false">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
          
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click="additem(name,price)">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list: [
        { id: 100, name: "外套", price: 199, time: new Date('2010-08-12')},
        { id: 101, name: "裤子", price: 34, time: new Date('2013-09-01') },
        { id: 102, name: "鞋", price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: "头发", price: 19900, time: new Date('2020-12-12') }
      ],
    };
  },
  methods: {
    //删除
    delitem(id) {
      if (id && confirm('确定删除?')) {  
      //  this.list = this.list.filter((item) => item.id !== id); // 新数组赋值给原来的数据

       this.list = this.list.filter((item) => {return item.id !== id})
      
      }
    },
    //添加
    additem(name,price) {
      if (name && price) {
        this.list.push(
          {
            id: ~~(Math.random() * 1000),
            name,
            price,
            time:new Date()
      }
        )
      this.name  = ''
      this.price =''
  }
}
  }

};
</script>

<style >
.red{
  color: red;
}
</style>
