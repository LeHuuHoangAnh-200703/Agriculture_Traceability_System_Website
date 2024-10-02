<script setup>
import Header from "../../components/layouts/Client/Header.vue";
import Footer from "../../components/layouts/Client/Footer.vue";
import { ref } from 'vue';

const showFarmerInfo = ref(false);
const showDistributorInfo = ref(false);
const showRetailerInfo = ref(false);

const toggleFarmerInfo = () => showFarmerInfo.value = !showFarmerInfo.value;
const toggleDistributorInfo = () => showDistributorInfo.value = !showDistributorInfo.value;
const toggleRetailerInfo = () => showRetailerInfo.value = !showRetailerInfo.value;
</script>

<template>
    <div class="min-h-screen flex flex-col gap-10 bg-gradient-to-br from-blue-100 via-[#A8D5BA] to-white pt-10">
        <Header />
        <div class="flex flex-grow item-center justify-center">
            <div class="bg-white rounded-xl flex lg:flex-row flex-col gap-10 w-full shadow-lg mx-4 lg:mx-20 p-6">
                <div class="flex items-center w-full lg:w-[30%] justify-center border-4 shadow-md rounded-xl p-2">
                    <img src="../../assets/img/produ_1.png" class="w-[400px] lg:w-[500px]" alt="">
                </div>
                <div class="flex flex-col gap-3 text-[#13313D] w-full lg:w-[70%]">
                    <h1 class="font-bold text-[25px] lg:text-[40px] uppercase">Táo đỏ Ninh Thuận</h1>
                    <p class="text-lg font-semibold">Mã sản phẩm: <span class="text-green-600">AH48GGF</span></p>
                    <h3 class="text-xl lg:text-2xl font-bold">Thông tin chi tiết về nông sản</h3>
                    <div class="flex flex-col gap-3">
                        <button @click="toggleFarmerInfo" class="w-full text-left bg-green-500 text-white text-[18px] lg:text-[20px] font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105">Thông tin từ nông dân</button>
                        <div v-if="showFarmerInfo" class="mt-2 flex flex-col gap-2">
                            <p class="text-green-600 text-[16px] lg:text-[20px] font-medium">Thông tin cá nhân và nông sản:</p>
                            <ul class="flex flex-col gap-2 px-5">
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Tên người trồng: Nguyễn Văn A</li>
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Địa chỉ: Xã Phước Hữu, Huyện Ninh Phước, Tỉnh Ninh Thuận</li>
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Số điện thoại: 0123 456 789</li>
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Nơi sản xuất: Phan Rang - Ninh Thuận</li>
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Giống cây trồng: Giống táo xanh địa phương (Giống táo Ninh Thuận).</li>
                            </ul>
                            <p class="text-green-600 text-[16px] lg:text-[20px] font-medium">Quy trình canh tác:</p>
                            <ul class="flex flex-col gap-2 px-5">
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Chuẩn bị đất: Xới đất và bón phân hữu cơ (phân chuồng, phân xanh).</li>
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Trồng cây: Trồng theo hàng với khoảng cách 3m giữa các cây.</li>
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Chăm sóc: Tưới nước đều đặn, cắt tỉa cành.</li>
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Sử dụng phân bón: Phân hữu cơ và phân sinh học (phân cá, phân đạm).</li>
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Quản lý dịch hại: Sử dụng thuốc trừ sâu sinh học và bẫy côn trùng.</li>
                                <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Thời gian thu hoạch: Tháng 8 hàng năm.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button @click="toggleDistributorInfo" class="w-full text-left bg-green-500 text-white text-[16px] lg:text-[20px] font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105">Thông tin từ nhà phân phối</button>
                        <ul v-if="showDistributorInfo" class="mt-2 flex flex-col gap-2 px-5">
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Tên công ty: Công ty TNHH Nông Sản Xanh</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Địa chỉ: 123 Đường 1/4, Thành phố Phan Rang, Tỉnh Ninh Thuận</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Số điện thoại: 0987 654 321</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Nguồn gốc sản phẩm: Nông dân Nguyễn Văn A, xã Phước Hữu, Ninh Phước.</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Tình trạng sản phẩm: Chất lượng tốt, số lượng 500 kg.</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Thời gian vận chuyển: 2 ngày.</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Điều kiện vận chuyển: Bảo quản lạnh ở nhiệt độ 5°C.</li>
                        </ul>
                    </div>
                    <div>
                        <button @click="toggleRetailerInfo" class="w-full text-left bg-green-500 text-white text-[16px] lg:text-[20px] font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105">Thông tin nhà bán lẻ</button>
                        <ul v-if="showRetailerInfo" class="mt-2 flex flex-col gap-2 px-5">
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Tên cửa hàng: Siêu thị Thực Phẩm Sạch</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Địa chỉ: 456 Đường Nguyễn Huệ, Thành phố Phan Rang, Tỉnh Ninh Thuận</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Số điện thoại: 0912 345 678</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Chất lượng sản phẩm: Kiểm tra chất lượng trước khi bán.</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Nhà phân phối: Công ty TNHH Nông Sản Xanh</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Nguồn gốc sản phẩm: Nông dân Nguyễn Văn A, quy trình sản xuất bền vững.</li>
                            <li class="list-disc text-[#13313D] text-[16px] lg:text-[20px] font-medium">Chứng nhận: Chứng nhận hữu cơ từ tổ chức kiểm định.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped></style>