<script setup>

</script>

<template>
  <header>
    <div class="relative flex items-center justify-between lg:py-4 lg:px-10 p-4">
      <div class="px-4">
        <h1 class="font-bold lg:text-2xl text-[14px] uppercase text-[#00697F]">
          <i class="fa-brands fa-slack text-[#13313D]"></i> - Agriculture_Traceability
        </h1>
      </div>
      <div class="lg:flex hidden flex-1 gap-4 max-w-xl">
        <input type="text"
          class="items-center w-full p-4 border border-gray-400 text-base font-semibold tracking-wider text-black bg-white/10 rounded-lg focus:outline-none"
          placeholder="Tìm kiếm theo mã sản phẩm ..." />
        <button class="font-bold text-lg bg-[#00697F] text-white px-4 py-3 rounded-lg whitespace-nowrap">
          Tìm kiếm
        </button>
      </div>
      <router-link to="/" class="font-bold text-[20px] text-white rounded-xl px-6 py-3 bg-[#00697F]">Trang
        chủ</router-link>
    </div>
  </header>
</template>

<style></style>