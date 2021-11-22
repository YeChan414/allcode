<template>
<div>
    <li>
          <label>
            <input type="checkbox" :checked="todoObj.done"/>
            <span>{{todoObj.title}}</span>
          </label>
          <button class="btn btn-danger" style="display:none">删除</button>
        </li>
        </div>
</template>

<script>
export default {
    name:'MyItem',
    props:['todoObj']
}
</script>

<style>

</style>