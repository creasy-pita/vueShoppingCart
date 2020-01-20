<template>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>商品数量</th>
                <th>操作</th>
                <th>备注</th>
            </tr>
        </thead> 
        <tbody>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.count}}</td>
                <td>
                    <button @click="handleReduce(index)" :disabled="item.count===0">-</button>
                    <button @click="handleAdd(index)" >+</button>
                    <button @click="handleRemove(index)" >移除</button>
                    <img src="../assets/logo.png">
                </td>
                <td><hell :msg="msg"></hell></td>
            </tr>
        </tbody>               
    </table> 
</template>
<script >
import hell from './HelloWorld'

export default({
    name:'shoppingchart',
    props:{
        msg:String
    },
    components:
    {hell},
    data:function(){
        return {list:[
            {
                id:1,
                name:'iphone',
                price: 6188,
                count:1
            },
            {
                id:2,
                name:'pro ',
                price: 3188,
                count:1
            },
            {
                id:3,
                name:'iwatch',
                price: 4188,
                count:1
            }                        
        ]}
    },
    computed:{
        totalPrice: function(){
            // var total=0;
            return '10';
        }
    },
    methods:{
        handleReduce:function(index){
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },        
        handleRemove:function(index){
            this.list.splice(index,1)
        }   
    }        
})
</script>
<style scoped>
    table{
    border : lpx solid #e9e9e9 ;
    border-collapse: collapse ;
    border-spacing : 0;
    empty-cells : show ;
    }
    th , td{
    padding : Spx 16px ;
    border : lpx solid #e9e9e9 ;
    text-align : left;
    }
    th{
    background: #f7f7f7 ;
    color : #5c6b77 ;
    font-weight: 600 ;
    white-space:nowrap;
    }
</style>