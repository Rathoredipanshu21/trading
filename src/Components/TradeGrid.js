import { useEffect, useState } from "react";
import axios from "axios";

const TradeGrid = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/trades").then((res) => setTrades(res.data));
  }, []);

  return (
    <>
      <style>
        {`
          .trade-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px;
          }

          @media (max-width: 768px) {
            .trade-container {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          }

          .trade-card {
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            background: #fff;
            width: 100%;
          
          }

          .trade-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
          }

          .trade-card h3 {
            margin: 10px 0;
          }

          .trade-card p {
            color: #555;
          }

          .trade-card a {
            display: inline-block;
            padding: 10px 15px;
            background: #007BFF;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 10px;
          }
        `}
      </style>

      <div className="trade-container">
        {trades.map((trade) => (
          <div key={trade.id} className="trade-card">
            <img
              src={`http://localhost:5000/uploads/${trade.image}`}
              alt={trade.title}
            />
            <h3>{trade.title}</h3>
            <p>{trade.description}</p>
            <a
              href={trade.link.startsWith("http") ? trade.link : `https://${trade.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default TradeGrid;
