<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
        <a class="navbar-brand" href="#">这也专栏</a>
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2" >登录</a></li>
            <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2" >注册</a></li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <Dropdown :title="`你好 ${user.name}`">
                <DropDownItem><a href="#" class="dropdown-item">新建文章</a></DropDownItem>
                <DropDownItem disabled><a href="#" class="dropdown-item">编辑资料</a></DropDownItem>
                <DropDownItem><a href="#" class="dropdown-item">退出登录</a></DropDownItem>
                </Dropdown>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import DropDownItem from './dropDownItem.vue'
import Dropdown from './dropDown.vue'
// import DropdownItem from "./dropdownItem.vue"

export interface UserPros {
    isLogin: boolean;
    name?: string;
    id?: number;
}
export default defineComponent({
    name: 'GlobalHeader',
    components:{Dropdown,DropDownItem},
    props: {
        user: {
            type: Object as PropType<UserPros>,
            required: true
        }
    }
})
</script>

<style>
</style>