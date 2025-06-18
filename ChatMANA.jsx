
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChatMANA() {
  const [messages, setMessages] = useState([
    { from: "mana", text: "Witaj. Jestem bezpieczną przestrzenią MANA. Jak mogę Ci dziś pomóc?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "mana", text: "Dziękuję za Twoją wiadomość. Wkrótce odpowiem szerzej." }]);
    }, 800);
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold text-center">Wsparcie MANA – Rozmowa</h1>
      <Card className="h-96 overflow-y-auto p-4 space-y-2">
        <CardContent className="space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={\`p-2 rounded-xl max-w-xs \${msg.from === "mana" ? "bg-gray-100" : "bg-blue-100 ml-auto"}\`}
            >
              {msg.text}
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Napisz wiadomość..."
        />
        <Button onClick={handleSend}>Wyślij</Button>
      </div>
    </div>
  );
}
