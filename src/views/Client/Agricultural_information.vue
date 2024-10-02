<script setup>
import Header from "../../components/layouts/Client/Header.vue";
import Footer from "../../components/layouts/Client/Footer.vue";
</script>

<template>
    <div class="min-h-screen flex flex-col gap-10 bg-gradient-to-br from-blue-100 via-[#A8D5BA] to-white pt-10">
        <Header />
        <div class="flex flex-grow item-center justify-center">
            <div class="bg-white rounded-xl flex lg:flex-row flex-col gap-10 w-full shadow-lg mx-4 lg:mx-20 p-6">
                <div class="flex items-center w-[30%] justify-center border-4 shadow-md rounded-xl p-2">
                    <img src="../../assets/img/produ_1.png" class="w-[500px]" alt="">
                </div>
                <div class="flex flex-col gap-2 text-[#13313D] w-[70%]">
                    <h1 class="font-bold text-[40px] uppercase">Táo đỏ Ninh Thuận</h1>
                    <p class="text-lg font-semibold">Mã sản phẩm: <span class="text-green-600">AH48GGF</span></p>
                    <h3 class="text-2xl font-bold">Thông tin chi tiết về nông sản</h3>
                    <div>
                        <div class="flex items-center justify-center w-full">
                            <span class="w-[5%] h-[2px] bg-[#13313D] rounded-full"></span>
                            <p class="text-[22px] text-green-600 font-semibold w-[15%] text-center">Từ nông dân</p>
                            <span class="w-[80%] h-[2px] bg-[#13313D] rounded-full"></span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p class="text-[#13313D] text-[20px] font-medium">Nơi sản xuất: Phan Rang - Ninh Thuận</p>
                            <p class="text-[#13313D] text-[20px] font-medium">Giống cây trồng: Giống táo địa phương, có
                                khả năng chịu nhiệt và ít bị sâu bệnh.</p>
                            <p class="text-[#13313D] text-[20px] font-medium">Nông dân: Các nông dân trồng táo xanh Ninh
                                Thuận là những người có kinh nghiệm lâu năm trong việc canh tác táo.</p>
                        </div>
                        <p class="text-green-600 text-[20px] font-medium">Quy trình canh tác:</p>
                        <ul class="flex flex-col gap-2 px-5">
                            <li class="list-disc text-[#13313D] text-[20px] font-medium">Chuẩn bị đất: Trước khi trồng
                                táo, nông dân thường tiến hành xới đất và bón phân hữu cơ để cải thiện độ phì nhiêu của
                                đất.</li>
                            <li class="list-disc text-[#13313D] text-[20px] font-medium">Trồng cây: Cây táo được trồng
                                theo hàng với khoảng cách hợp lý để cây có đủ không gian phát triển. Trong giai đoạn
                                đầu, cây được tưới nước đều đặn để rễ phát triển tốt.</li>
                            <li class="list-disc text-[#13313D] text-[20px] font-medium">Sử dụng phân bón: Nông dân chủ
                                yếu sử dụng phân hữu cơ và phân sinh học để cung cấp dinh dưỡng cho cây, đảm bảo sự phát
                                triển bền vững mà không gây ô nhiễm môi trường.</li>
                            <li class="list-disc text-[#13313D] text-[20px] font-medium">Quản lý dịch hại: Họ sử dụng
                                các biện pháp phòng trừ sâu bệnh thân thiện với môi trường, chẳng hạn như sử dụng bẫy
                                côn trùng sinh học và thuốc trừ sâu thảo dược. Các loại thuốc hóa học chỉ được sử dụng
                                khi cần thiết và tuân theo quy định nghiêm ngặt về an toàn thực phẩm.</li>
                            <li class="list-disc text-[#13313D] text-[20px] font-medium">Phương pháp canh tác bền vững:
                                Họ áp dụng kỹ thuật luân canh cây trồng và sử dụng nguồn nước tiết kiệm thông qua hệ
                                thống tưới nhỏ giọt. Điều này giúp giảm thiểu việc lãng phí tài nguyên và bảo vệ môi
                                trường tự nhiên.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped></style>