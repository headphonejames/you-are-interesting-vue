import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { API } from "aws-amplify";

export const getPrompts = async () => {
  const promptQuery: any = await API.graphql({
    query: queries.listPrompts,
  });
  return promptQuery.data.listPrompts.items;
};

export const addPrompt = async (name: string) => {
  if (!name) return;
  const promptData = {
    prompt: name,
  };
  await API.graphql({
    query: mutations.createPrompt,
    variables: { input: promptData },
  });
  return await getPrompts();
};

export const removePrompt = async (prompt: any) => {
  await API.graphql({
    query: mutations.deletePrompt,
    variables: { input: { id: prompt.id } },
  });
  return await getPrompts();
};

export const sortedPrompts = (prompts: any) => {
  return prompts.sort((a: any, b: any) =>
    a.prompt > b.prompt ? 1 : -1
  );
};
