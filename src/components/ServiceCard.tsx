import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const data = [
  { work: "Порізка ДСП 10-18 мм", unit: "1 м.п.", price: 11.5, currency: "грн" },
  { work: "Порізка залишків", unit: "1 м.п.", price: 13.6, currency: "грн" },
  { work: "Порізка ДВП", unit: "1 м.п.", price: 7.5, currency: "грн" },
  { work: "Порізка стяжок в розмір", unit: "1 м.п.", price: 18, currency: "грн" },
  { work: "Порізка фанери 18-22 мм", unit: "1 м.п.", price: 15, currency: "грн" },
  { work: "Порізка фанери 25-36 мм", unit: "1 м.п.", price: 31, currency: "грн" },
  { work: "Порізка OSB", unit: "1 м.п.", price: 13.5, currency: "грн" },
  { work: "Порізка МДФ 4-12 мм", unit: "1 м.п.", price: 11, currency: "грн" },
  { work: "Порізка МДФ 19 мм", unit: "1 м.п.", price: 13.5, currency: "грн" },
  { work: "Порізка стінової панелі", unit: "1 м.п.", price: 13.5, currency: "грн" },
];

export default function PriceTableModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <Button onClick={() => setOpen(true)}>Відкрити прайс</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogTitle>Прайс на порізку</DialogTitle>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Перелік робіт</th>
                  <th className="border px-4 py-2">Одиниці вимірювання</th>
                  <th className="border px-4 py-2">Ціна</th>
                  <th className="border px-4 py-2">Валюта</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-100">
                    <td className="border px-4 py-2">{item.work}</td>
                    <td className="border px-4 py-2">{item.unit}</td>
                    <td className="border px-4 py-2">{item.price}</td>
                    <td className="border px-4 py-2">{item.currency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
