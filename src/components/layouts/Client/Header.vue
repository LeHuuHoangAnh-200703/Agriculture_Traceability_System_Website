<script setup>

</script>

<template>
  <header>
    <div class="w-full flex justify-between items-center px-5 md:px-10">
      <div class="text-[14px] md:text-lg font-bold"><i class="fa-brands fa-slack text-[#13313D]"></i> -
        Agriculture_Traceability
      </div>
      <div class="lg:flex hidden flex-1 gap-4 max-w-xl">
        <input type="text"
          class="items-center w-full p-3 drop-shadow text-base font-semibold tracking-wider text-black bg-white rounded-lg focus:outline-none"
          placeholder="Tìm kiếm nông sản theo mã ..." />
        <button class="font-bold text-lg bg-[#13313D] text-white px-4 py-2 rounded-lg whitespace-nowrap">
          Tìm kiếm
        </button>
      </div>
      <button
        class="bg-white text-[#13313D] text-[14px] md:text-[18px] rounded-full py-2 px-4 md:px-6 font-semibold shadow-lg transition-all duration-300 transform hover:bg-[#13313D] hover:text-white hover:scale-105 hover:shadow-lg">
        Trang chủ <i class="fa-brands fa-plus"></i>
      </button>
    </div>
    <div class="flex gap-4 px-10 lg:hidden mt-8">
      <input type="text"
        class="items-center w-full p-2 lg:p-3 drop-shadow placeholder:text-[12px] text-base font-semibold tracking-wider text-black bg-white rounded-lg focus:outline-none"
        placeholder="Tìm kiếm nông sản theo mã ..." />
      <button
        class="font-bold text-[14px] lg:text-lg bg-[#13313D] text-white px-3 lg:px-4 lg:py-2 rounded-lg whitespace-nowrap">
        Tìm kiếm
      </button>
    </div>
  </header>
</template>

<style></style>