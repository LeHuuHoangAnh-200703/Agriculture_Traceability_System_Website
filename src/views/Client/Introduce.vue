<script setup></script>

<template>
    <div
        class="min-h-screen flex flex-col gap-10 bg-gradient-to-br from-blue-100 via-[#A8D5BA] to-white py-10">
        <div class="w-full flex justify-between items-center px-5 md:px-10 pb-10 md:pb-0">
            <div class="text-[14px] md:text-lg font-bold"><i class="fa-brands fa-slack text-[#13313D]"></i> - Agriculture_Traceability
            </div>
            <button
                class="bg-white text-[#13313D] text-[14px] md:text-[18px] rounded-full py-2 px-4 md:px-6 font-semibold shadow-lg transition-all duration-300 transform hover:bg-[#13313D] hover:text-white hover:scale-105 hover:shadow-lg">
                Trang chủ <i class="fa-brands fa-plus"></i>
            </button>
        </div>
        <div class="flex flex-col lg:flex-row justify-between px-5 md:px-20">
            <div class="flex w-full lg:w-1/2 justify-center md:items-start items-center flex-col space-y-3 relative">
                <div class="flex items-center justify-start space-x-2 flex-col md:flex-row">
                    <p class="text-green-600 font-bold text-base md:text-2xl">Trace the origin of agricultural products</p>
                    <img src="../../assets/img/vegetable.png" alt="" class="w-16 md:w-auto">
                </div>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-col text-[#13313D] uppercase text-center md:text-left">
                    Truy xuất nguồn gốc
                    <span class="text-green-600 my-4">Nông sản</span>
                </h1>
                <p class="text-[14px] md:text-[15px] lg:text-[17px] font-semibold pt-3 text-center md:text-left">Hệ thống truy xuất nguồn gốc nông sản cung cấp thông tin minh
                    bạch về nguồn gốc và quy trình sản xuất của các sản phẩm nông nghiệp. Bằng cách sử dụng công nghệ blockchain, người tiêu dùng có thể dễ dàng xác minh nguồn gốc sản phẩm, từ đó đảm bảo an toàn
                    thực phẩm và nâng cao niềm tin. Hệ thống không chỉ hỗ trợ người tiêu dùng mà còn giúp nông dân xây
                    dựng thương hiệu và gia tăng giá trị sản phẩm.</p>
            </div>
            <div class="w-full lg:w-1/2 relative">
                <img src="../../assets/img/b3.png" alt="" class="w-full md:w-[800px] drop-shadow-2xl self-center h-auto">
                <div class="hidden md:flex justify-end space-x-2 items-center font-bold">
                    <span>Powered by</span>
                    <i class="fa-solid fa-globe text-gray-900"></i>
                    <span>Paul To</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>