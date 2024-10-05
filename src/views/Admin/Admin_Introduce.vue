<script setup>

</script>

<template>
    <div class="min-h-screen flex flex-col gap-10 bg-gradient-to-br from-blue-100 via-[#A8D5BA] to-white py-10">
        <div class="w-full flex justify-between items-center px-5 md:px-10">
            <div class="text-[14px] md:text-lg font-bold"><i class="fa-brands fa-slack text-[#13313D]"></i> -
                Agriculture_Traceability
            </div>
            <button
                class="bg-white text-[#13313D] text-[14px] md:text-[18px] rounded-full py-2 px-4 md:px-6 font-semibold shadow-lg transition-all duration-300 transform hover:bg-[#13313D] hover:text-white hover:scale-105 hover:shadow-lg">
                Trang chủ <i class="fa-brands fa-plus"></i>
            </button>
        </div>
        <div class="flex flex-col lg:flex-row gap-8 justify-between px-5 md:px-20">
            <div class="flex w-full lg:w-1/2 justify-center md:items-start items-center flex-col space-y-3 relative">
                <div class="flex items-center justify-start space-x-2 flex-col md:flex-row">
                    <p class="text-green-600 font-bold text-base md:text-2xl">Trace the origin of agricultural products
                    </p>
                    <img src="../../assets/img/vegetable.png" alt="" class="w-16 md:w-auto">
                </div>
                <h1
                    class="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-col text-[#13313D] uppercase text-center md:text-left">
                    Truy xuất nguồn gốc
                    <span class="text-green-600 my-4">Nông sản</span>
                </h1>
                <p
                    class="text-[18px] md:text-[19px] lg:text-[20px] text-[#13313D] font-semibold pt-3 text-center md:text-left">
                    Vui lòng chọn vai trò phù hợp khi truy cập vào hệ thống để tiến hành quản lý các thông tin cần thiết cho chuỗi cung ứng.
                </p>
            </div>
            <div class="w-full lg:w-1/2 relative flex flex-col">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="max-w-sm mx-auto col-span-2 lg:col-span-1 bg-white rounded-xl shadow-md">
                        <div class="p-4">
                            <div class="relative bg-white cursor-pointer transition-all duration-300 hover:-translate-y-8 rounded-lg border-2 shadow-lg p-6 max-w-sm mx-auto">
                                <div
                                    class="bg-green-300 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                                    <img src="../../assets/img/produ_2.png" alt="Grape" class="w-10 h-10">
                                </div>
                                <h2 class="text-center text-xl font-bold mt-4">Nông dân</h2>
                                <p class="text-center text-gray-500 mt-2">Vai trò trồng trọt và cung cấp sản phẩm nông sản.</p>
                                <div class="flex justify-center mt-4">
                                    <button
                                        class="bg-green-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition">
                                        Đăng nhập
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-sm mx-auto col-span-2 lg:col-span-1 bg-white rounded-xl shadow-md">
                        <div class="p-4">
                            <div class="relative bg-white cursor-pointer transition-all duration-300 hover:-translate-y-8 rounded-lg border-2 shadow-lg p-6 max-w-sm mx-auto">
                                <div
                                    class="bg-yellow-300 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                                    <img src="../../assets/img/produ_3.png" alt="Grape" class="w-10 h-10">
                                </div>
                                <h2 class="text-center text-xl font-bold mt-4">Nhà phân phối</h2>
                                <p class="text-center text-gray-500 mt-2">Có vai trò vận chuyển nông sản từ nông dân đến thị trường.</p>
                                <div class="flex justify-center mt-4">
                                    <button
                                        class="bg-yellow-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition">
                                        Đăng nhập
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" mx-auto col-span-2 bg-white rounded-xl shadow-md">
                        <div class="p-4">
                            <div class="relative bg-white cursor-pointer transition-all duration-300 hover:-translate-y-8 rounded-lg border-2 shadow-lg p-6 max-w-sm mx-auto">
                                <div
                                    class="bg-orange-300 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                                    <img src="../../assets/img/produ_4.png" alt="Grape" class="w-10 h-10">
                                </div>
                                <h2 class="text-center text-xl font-bold mt-4">Nhà bán lẻ</h2>
                                <p class="text-center text-gray-500 mt-2">Các cửa hàng hoặc siêu thị bán nông sản cho người tiêu dùng.</p>
                                <div class="flex justify-center mt-4">
                                    <button
                                        class="bg-orange-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition">
                                        Đăng nhập
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>