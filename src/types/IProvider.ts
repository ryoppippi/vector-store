import OpenAI from "openai";
import { AssistantCreateParams } from "openai/resources/beta/assistants";
import { FileChunkingStrategyParam } from "openai/resources/vector-stores/vector-stores";

export interface IProvider {
  /**
   * Openai was injected api_key
   */
  api: OpenAI;

  /**
   * VectorStore
   */
  vectorStore:
    | {
        /**
         * VectorStore name to create
         */
        name: string;

        /**
         * @inheritdoc
         */
        chunking_strategy?: FileChunkingStrategyParam;
      }
    | {
        /**
         * If you have already created it, please inject the ID of the Vector Store.
         */
        id: string;
      };

  /**
   * Assistant
   */
  assistant:
    | AssistantCreateParams
    | {
        /**
         * if you have already created it, please inject the ID of the Assistant.
         */
        id: string;
      };
}
