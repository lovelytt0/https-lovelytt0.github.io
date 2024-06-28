import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, GraduationCap, Briefcase, User } from 'lucide-react';

const PersonalWebsite = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Tian Feng</h1>
        <p className="text-xl text-gray-600">AI Researcher | Geophysicist</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/lovelytt0" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon"><Github className="h-4 w-4" /></Button>
          </a>
          <a href="https://www.linkedin.com/in/tian-feng-690b98132/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon"><Linkedin className="h-4 w-4" /></Button>
          </a>
          <a href="mailto:tianfengseis@gmail.com">
            <Button variant="outline" size="icon"><Mail className="h-4 w-4" /></Button>
          </a>
        </div>
      </header>

      <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="about"><User className="mr-2 h-4 w-4" /> About</TabsTrigger>
          <TabsTrigger value="experience"><Briefcase className="mr-2 h-4 w-4" /> Experience</TabsTrigger>
          <TabsTrigger value="education"><GraduationCap className="mr-2 h-4 w-4" /> Education</TabsTrigger>
          <TabsTrigger value="publications"><FileText className="mr-2 h-4 w-4" /> Publications</TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p>I am a Data Scientist with a Ph.D. in Geophysics, specializing in AI and deep learning. My expertise lies in developing AI solutions and conducting impactful research, as demonstrated by major projects at Capital One and notable publications. I am skilled in using large language models (LLM) and advanced machine learning to address complex challenges.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold">Principal Data Scientist (Generative AI) - Capital One</h3>
              <p className="text-sm text-gray-500">Jun 2022 – Present | New York, NY</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Developed an AI agent MVP powered by LLM for customer service tasks.</li>
                <li>Collaborated on LLM-crafted personalized marketing emails.</li>
                <li>Developed and deployed three Deep Learning models into production.</li>
              </ul>
              
              <h3 className="font-bold mt-4">PhD Data Science Intern - Capital One</h3>
              <p className="text-sm text-gray-500">Jun 2021 – Aug 2021 | New York, NY</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Developed an advanced ASR system for call transcription.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold">Ph.D. in Geophysics and Space Physics</h3>
              <p className="text-sm text-gray-500">University of California, Los Angeles (UCLA) | May 2022</p>
              
              <h3 className="font-bold mt-4">Bachelor of Science in Geophysics, minor in Computer Science</h3>
              <p className="text-sm text-gray-500">Nanjing University | Jun 2016</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="publications">
          <Card>
            <CardHeader>
              <CardTitle>Selected Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Feng, T., Meng, L., & Huang, H. (2020). Detecting Offshore Seismicity: Combining Backprojection Imaging and Matched‐filter Detection. Journal of Geophysical Research: Solid Earth.</li>
                <li>Feng, T., & Meng, L. (2018). A High‐Frequency Distance Metric in Ground‐Motion Prediction Equations Based on Seismic Array Backprojections. Geophysical Research Letters.</li>
                <li>Bao, H., Ampuero, J. P., Meng, L., Fielding, E. J., Liang, C., Milliner, C. W., Feng, T. & Huang, H. (2019). Early and persistent supershear rupture of the 2018 magnitude 7.5 Palu earthquake. Nature Geoscience.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

ReactDOM.render(<PersonalWebsite />, document.getElementById('root'));
