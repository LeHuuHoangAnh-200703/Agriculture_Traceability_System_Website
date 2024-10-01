<script setup>
import Header from "../../components/layouts/Client/Header.vue";
import Footer from "../../components/layouts/Client/Footer.vue";
</script>

<template>
    <div class="min-h-screen flex flex-col gap-10 bg-gradient-to-br from-blue-100 via-[#A8D5BA] to-white pt-10">
        <Header />
        <div class="flex flex-grow item-center justify-center">
            <div class="bg-white rounded-xl flex gap-10 w-full shadow-lg mx-20 p-4">
                <div class="flex items-center justify-center border-4 shadow-md rounded-xl p-2">
                    <img src="../../assets/img/produ_1.png" class="w-[500px]" alt="">
                </div>
                <div class="flex flex-col gap-4">
                    <h1 class="font-bold text-[40px] uppercase text-[#13313D]">Táo đỏ Ninh Thuận</h1>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped></style>