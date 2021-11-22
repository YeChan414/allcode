<template>
<div>
    <School :getSchoolName="getSchoolName"></School>
    <Student v-on:chenyi="getStudentName"></Student>
</div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        School,
        Student
    },
    methods:{
        getSchoolName(name){
            console.log("获取到了学校名称",name)
        },
        getStudentName(name){
            console.log("获取到了学生名称",name)
        }
    }
}
</script>

<style>

</style>