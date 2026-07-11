import React, { use } from 'react'
import Card from './Card';

const users = [
   {
    name: "Sydney Sweeney",
    bio: "Actoress with dignity in heart and sharpe in figures.",
    img: "https://imgs.search.brave.com/cjPjmW-E8kNgoS9tDFLfs-VDjkdJSyoOm6DC1arOAME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zeWRu/ZXktc3dlZW5leS1s/b3MtYW5nZWxlcy11/c2EtZGVjZW1iZXIt/c3lkbmV5LXN3ZWVu/ZXktcHJlbWllcmUt/aG91c2VtYWlkLXRj/bC1jaGluZXNlLXRo/ZWF0cmUtcGljdHVy/ZS1wYXVsLTQyODg4/NzAyMS5qcGc",
    p_count: 29,
    f_count: "15M"
  },
  {
    name: "Muhammad Emon",
    bio: "Product Designer focused on simplicity & usability.",
    img: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    p_count: 16,
    f_count: 524
  },
  {
    name: "Sarah Johnson",
    bio: "UI/UX Designer creating delightful digital experiences.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    p_count: 22,
    f_count: 812
  },
  {
    name: "David Kim",
    bio: "Frontend Developer who loves React and clean code.",
    img: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    p_count: 31,
    f_count: 1460
  },
  {
    name: "Emily Carter",
    bio: "Brand Designer with a passion for minimalism.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    p_count: 19,
    f_count: 675
  },
  {
    name: "Aarav Patel",
    bio: "Full Stack Developer building scalable web apps.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    p_count: 27,
    f_count: 1240
  },
  {
    name: "Sophia Williams",
    bio: "Illustrator and digital artist sharing colorful creations.",
    img: "https://imgs.search.brave.com/hpmFG8QMp-T7qi-to-4tgYXcseqPimQyAysB8YJ6n48/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE3/NDc0ODA0L3Bob3Rv/L2FjdHJlc3Mtc29w/aGlhLWxvcmVuLWlu/LWEtcHVibGljaXR5/LXBob3RvLXdpdGgt/Ym90aC1oYW5kcy1z/aG93aW5nLXRoZS1h/LW8tay1zaWduLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1m/VHNLUWEteE40bzRQ/T1lqR2RNOUV3WHRq/cm95NEhON2pFSXBy/TGl0cTg0PQ",
    p_count: 43,
    f_count: 2100
  },
  {
    name: "Noah Martinez",
    bio: "Mobile App Developer specializing in Flutter.",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    p_count: 24,
    f_count: 980
  },
  {
    name: "Olivia Brown",
    bio: "Motion Designer bringing interfaces to life.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    p_count: 18,
    f_count: 730
  },
  {
    name: "James Anderson",
    bio: "Backend Engineer passionate about cloud architecture.",
    img: "https://media.istockphoto.com/id/981489282/photo/businessman-using-credit-card-and-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=OVzhI9bmOXYLohQNph4Pbdsf66cu9cSrgt8_Eyz8qs0=",
    p_count: 35,
    f_count: 1875
  },
];

const Users = () => {
  return (
    <div className="users">
      {users.map((user, index) => (
        <Card
          key={index}
          name={user.name}
          bio={user.bio}
          img={user.img}
          p_count={user.p_count}
          f_count={user.f_count}
        />
      ))}
    </div>
  );
};
export default Users