import React, { useState } from "react";
import { Container, VStack, Input, Button, FormControl, FormLabel, Select, Textarea, HStack, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";

const Index = () => {
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [prompts, setPrompts] = useState([{ id: 1, text: "" }]);
  const [depth, setDepth] = useState(1);
  const [breadth, setBreadth] = useState(10);
  const [frequency, setFrequency] = useState("daily");

  const navigate = useNavigate();

  const handleAddPrompt = () => {
    setPrompts([...prompts, { id: prompts.length + 1, text: "" }]);
  };

  const handlePromptChange = (id, value) => {
    setPrompts(prompts.map((prompt) => (prompt.id === id ? { ...prompt, text: value } : prompt)));
  };

  const handleStartCrawl = () => {
    // Implement start crawl logic
    console.log("Start crawling:", { domain, prompts, depth, breadth, frequency, email, name });
    navigate("/results");
  };

  const handlePauseCrawl = () => {
    // Implement pause crawl logic
    console.log("Pause crawling");
  };

  const handleStopCrawl = () => {
    // Implement stop crawl logic
    console.log("Stop crawling");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., John Doe" />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g., john@example.com" />
        </FormControl>

        <FormControl id="domain">
          <FormLabel>Target Domain</FormLabel>
          <Input value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="e.g., example.com" />
        </FormControl>

        <FormControl id="prompts">
          <FormLabel>Desired Data</FormLabel>
          {prompts.map((prompt) => (
            <Textarea key={prompt.id} value={prompt.text} onChange={(e) => handlePromptChange(prompt.id, e.target.value)} placeholder="e.g., Extract article titles" mb={2} />
          ))}
          <Button onClick={handleAddPrompt}>Add Another Prompt</Button>
        </FormControl>

        <FormControl id="depth">
          <FormLabel>Crawling Depth</FormLabel>
          <Select value={depth} onChange={(e) => setDepth(parseInt(e.target.value))}>
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1} levels deep
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl id="breadth">
          <FormLabel>Crawling Breadth</FormLabel>
          <Select value={breadth} onChange={(e) => setBreadth(parseInt(e.target.value))}>
            {[...Array(20).keys()].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1} links per page
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl id="frequency">
          <FormLabel>Crawling Frequency</FormLabel>
          <Select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <option value="daily">Once daily</option>
            <option value="weekly">Once weekly</option>
            <option value="monthly">Once monthly</option>
          </Select>
        </FormControl>

        <HStack spacing={4}>
          <IconButton aria-label="Start" icon={<FaPlay />} size="lg" onClick={handleStartCrawl} />
          <IconButton aria-label="Pause" icon={<FaPause />} size="lg" onClick={handlePauseCrawl} />
          <IconButton aria-label="Stop" icon={<FaStop />} size="lg" onClick={handleStopCrawl} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
