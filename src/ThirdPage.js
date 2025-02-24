import React from 'react';
import './App.css';
import './index.css';
import './card.css';
import { useLocation } from 'react-router-dom';

function getRandomValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);  // สุ่มดัชนีของ array
    return arr[randomIndex];  // คืนค่าตัวแปรจากดัชนีที่สุ่มได้
  }

// ตัวอย่างการใช้งาน
const colors = ["ที่สละเวลามาร่วมแสดงความยินดีในวันปัจฉิมของพี่ การได้รับคำอวยพรและกำลังใจจากน้องๆ ทำให้พี่รู้สึกดีใจและมีความสุขมากๆ ทุกคำพูดและความตั้งใจที่น้องๆ แสดงออกมาในวันนี้มีความหมายอย่างมาก และเป็นสิ่งที่พี่จะเก็บไว้ในความทรงจำเป็นอย่างดี",
     "ขอให้น้องตั้งใจเรียนและมุ่งมั่นทำตามความฝันของตัวเองต่อไป ไม่ว่าทางข้างหน้าจะมีอุปสรรคมากแค่ไหน ขอให้เชื่อมั่นในความสามารถของตัวเองและก้าวเดินต่อไปด้วยความกล้าหาญ พี่เชื่อว่าน้องจะประสบความสำเร็จในสิ่งที่หวังไว้และมีอนาคตที่สดใสรออยู่",
     "สุดท้ายนี้ พี่อยากขอบคุณจากใจสำหรับทุกความรักและความห่วงใยที่ได้รับ ขอให้น้องมีความสุขและประสบความสำเร็จในทุกๆเรื่อง และหวังว่าเราจะยังคงมีความสัมพันธ์ที่ดีต่อกันเสมอ แม้ว่าเวลาจะผ่านไป แต่ความทรงจำและความผูกพันที่เรามีร่วมกันจะยังคงอยู่ในใจพี่เสมอ"];


function ThirdPage() {
    const location = useLocation();  // ใช้ useLocation เพื่อดึงข้อมูล state ที่ส่งมาจาก FirstPage
    const { name } = location.state || {};  // ถ้ามี state ให้ดึงชื่อมาใช้งาน
    return (
        <div class='App-header'>
            <div class="bgblue">
            <div class="card">
                <h1 class="text">ขอบคุณ น้อง{ name }!</h1>
                <p class="text-full">{getRandomValue(colors)}</p>
            </div>
            </div>
        </div>
    );
}
export default ThirdPage;
