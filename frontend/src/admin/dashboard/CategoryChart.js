import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CategoryChart = () => {
    const data = {
        labels: [
            'Hạt Giống Cây Ăn Trái',
            'Hạt Giống Rau Mầm',
            'Hạt Giống Dược Liệu',
            'Hạt Giống Cây Cảnh',
            'Hạt Giống Rau, Củ, Quả',
            'Hạt Giống Rau Gia Vị',
            'Hạt Giống Hoa',
            'Hạt Giống Cỏ',
        ],
        datasets: [
            {
                label: 'TỔNG SỐ LƯỢNG',
                data: [11759, 18979, 17648, 15784, 16267, 12356, 19843, 14958],
                backgroundColor: 'rgb(42, 213, 4)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'TỔNG SỐ LƯỢNG SẢN PHẨM TRONG KHO CỦA TỪNG DANH MỤC',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default CategoryChart;
