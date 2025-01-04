import React from "react";

export interface ClientEvent {
  type: string;
  event_id?: string;
  response?: {
    instructions?: string;
    output?: Array<{
      type: string;
      name: string;
      arguments: string;
    }>;
  };
  session?: {
    tools: Array<{
      type: string;
      name: string;
      description: string;
      parameters: {
        type: string;
        strict: boolean;
        properties: Record<
          string,
          {
            type: string;
            description: string;
            items?: {
              type: string;
              description: string;
            };
          }
        >;
        required: string[];
      };
    }>;
    tool_choice: string;
  };
  item?: {
    type: string;
    role: string;
    content: Array<{
      type: string;
      text: string;
    }>;
  };
}

export interface FunctionCallOutputProps {
  functionCallOutput: {
    type: string;
    name: string;
    arguments: string;
  };
}

export interface ButtonProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface EventProps {
  event: ClientEvent;
  timestamp: string;
}

export interface EventLogProps {
  events: ClientEvent[];
}

export interface SessionControlsProps {
  startSession: () => Promise<void>;
  stopSession: () => void;
  sendClientEvent: (message: ClientEvent) => void;
  sendTextMessage: (message: string) => void;
  events: ClientEvent[];
  isSessionActive: boolean;
}

export interface ToolPanelProps {
  isSessionActive: boolean;
  sendClientEvent: (message: ClientEvent) => void;
  events: ClientEvent[];
}
