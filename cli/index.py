import requests
import json
import subprocess
import os
import sys
import math

def prompting(models: str, limit: int, uid: str): 
    loop = True
    subprocess.call("clear", shell=True)
    while loop == True:
        if limit == 0: 
            print("no more prompts" + str(limit) + "\nbuy more\n")
            con = input("go back (y/n)\n")
            if con == "y" or con == "Y":
                bill = requests.get("https://billing-jmoufuae2a-uc.a.run.app?uid=" + id).json()
                return hub(uid, bill["balance"])
            else:
                return model(limit, uid)
        print("prompts left: " + str(limit) + "\n")
        target = input("write a prompt for " + models + " here (write :wq to exit) : ")
        if target == ":wq":
            bill = requests.get("https://billing-jmoufuae2a-uc.a.run.app?uid=" + uid).json()
            return hub(uid, bill["balance"])
        ans = "https://models-jmoufuae2a-uc.a.run.app?model=" + models + "&text=" + target
        data = requests.get(ans).text
        print(data + "\n", end="\n") 
        target = requests.get("https://update-balance-jmoufuae2a-uc.a.run.app?uid=" + uid).text

        limit -= 1

def model(limit: int, uid: str):
    subprocess.call("clear")
    if limit == 0: 
        print("no more prompts left: " + str(limit) + "\nbuy more\n")
        con = input("go back (y/n)\n")
        if con == "Y" or con == "y":
            bill = requests.get("https://billing-jmoufuae2a-uc.a.run.app?uid=" + id).json()
            return hub(uid, bill["balance"])
        else:
            model(limit, uid)
    obj = {"LLM 1": "DeepSeek-V3-0324", "LLM 2": "Llama-4-Scout-17B-16E-Instruct", "LLM 3": "Meta-Llama-3.1-405B-Instruct", "LLM 4": "Phi-4-mini-instruct", "LLM 5": "Ministral-3B"}
    for x in ["LLM 1", "LLM 2", "LLM 3", "LLM 4", "LLM 5"]:
        print({str((str(x).split(" "))[1]): obj[x]})
    while True:
        target = input("enter a model like 1, 2, 3, 4, 5 or :wq to go back ")
        match(target):
            case "1": 
                return prompting(obj["LLM 1"], limit, uid)
            case "2":
                return prompting(obj["LLM 2"], limit, uid)
            case "3":
                return prompting(obj["LLM 3"], limit, uid)
            case "4": 
                return prompting(obj["LLM 4"], limit, uid)
            case "5":
                return prompting(obj["LLM 5"], limit, uid)
            case ":wq":
                return hub(uid)
            case _:
                print(target + " isn't a option pick another")

def billing(id: str):
    subprocess.call("clear", shell=True)

    while True:
        amount = input("add an amount to add to the balance or enter :wq to go back\n")

        if amount == ":wq":
            bill = requests.get("https://billing-jmoufuae2a-uc.a.run.app?uid=" + id).json()
            return hub(id, int(bill["balance"]))
        for x in range(len(amount)): 
            if amount[x].isdigit() != True:
                return "amount is not a number" 
        data = requests.get("https://checkout-jmoufuae2a-uc.a.run.app?amount=" + amount + "&id=" + id).text
        print("click link to buy more prompts " + data + "\n")

        con = input("finished (y/n)\n")
        if con == "y" or con == "Y":
            bill = requests.get("https://billing-jmoufuae2a-uc.a.run.app?uid=" + id).json()
            return hub(id, bill["balance"])    


def hub(uid: str, balance: int):
    subprocess.call("clear", shell=True)
    data = {"balance": balance}
    print("billing: $" + str(math.ceil(data["balance"]) / 50) + "\nwhich equals " + str(data["balance"])  + " prompts left\n")

    target = input("1 - enter 1 for billing\n2 - enter 2 to start prompting models\n3 - enter 3 to go back\n")
    match(target): 
        case "1": 
            return billing(uid)
        case "2":
            return model((int(data["balance"])), uid)
        case "3": 
            return main()

def deleteAccount(): 
    subprocess.call("clear", shell=True)
    print("account deletion\n")
    email = input("enter your email to delete your account or enter :wq to go back\n")

    if email == ":wq":
        return main()
    
    data = requests.get("https://deletion-jmoufuae2a-uc.a.run.app?email=" + email).text
    if(data == '{"code":"ECONNRESET"}'):
        print("user doesn't exist in the records")

    con = input("continue(y/n)\n")
    if con == "y" or con == "Y":
        return main()
    else: 
        return deleteAccount()
    
def register():
    subprocess.call("clear", shell=True)
    print("create a account using email and password\ncreds stored on firebase auth")
    email = input("enter an email or enter :wq to back\n")
    
    if email == ":wq": 
        return main()

    loop = True
    while loop == True:
        password = input("enter an password or enter :wq to back\n")
        if len(password) >= 6:
            loop = False
        else:
            print("password cannot be less than 6 letters or numbers or symbols\n")
            loop = True

        if password == ":wq":
            return main()
    
    data = requests.get("https://register-jmoufuae2a-uc.a.run.app?email=" + email + "&password=" + password).text
    
    return login()

def login():
    subprocess.call("clear", shell=True)
    while True:
        print("login with email and password, creds are stored on firebase auth\n")

        email = input("enter your email address or enter :wq to go back\n")
        if(email == ":wq"):
            return main()
        
        password = input("enter your password or enter :wq to go back\n")
        
    
        link = "https://login-jmoufuae2a-uc.a.run.app?email=" + email + "&password=" + password
        data = requests.get(link).text
    
        if data == "There is no user record corresponding to the provided identifier." or data == '{"code":"ECONNRESET"}':
            subprocess.call("clear", shell=True)
            print("There is no user record corresponding to the provided identifier\nplease enter your email again\n")
        else:
            link2 = "https://billing-jmoufuae2a-uc.a.run.app?uid=" + data
            prompts = requests.get(link2).json()
            return hub(data, int(prompts["balance"]))

def guestPrompt(model: str, limit: int):
    subprocess.call("clear", shell=True)
    if limit == 0:
        print("no more prompts: " + str(limit))
        con = input("go back (y/n)\n")
        if con == "Y" or con == "y":
            return main()
        else:
            return guestPrompt(model, limit)
    while True:
        if limit == 0: 
            print("no more prompts: " + str(limit))
            con = input("go back (y/n)\n")
            if con == "Y" or con == "y":
                return main()
            else:
                return guestPrompt(model, limit)
        print("you have " + str(limit) + " prompts left\n")
        target = input("write a prompt for " + model + " here or enter :wq to go back : ")

        if target == ":wq":
            return main()
        data = requests.get("https://models-jmoufuae2a-uc.a.run.app?model=" + str(model) + "&text=" + target).text
        print(data + "\n")

def guestModels(id: str, limit: int):
    subprocess.call("clear", shell=True)
    if limit == 0:
        print("no more prompts: " + str(limit))
        con = input("go back (y/n)\n")
        if con == "Y" or con == "y":
            return main()
        else:
            return guestModels(id, limit)
    obj = {"LLM 1": "DeepSeek-V3-0324", "LLM 2": "Llama-4-Scout-17B-16E-Instruct", "LLM 3": "Meta-Llama-3.1-405B-Instruct", "LLM 4": "Phi-4-mini-instruct", "LLM 5": "Ministral-3B"}
    for x in ["LLM 1", "LLM 2", "LLM 3", "LLM 4", "LLM 5"]:
        print({str((str(x).split(" "))[1]): obj[x]})
    while True:
        target = input("enter a model to prompt like 1, 2, 3, 4, 5 or :wq to go back\n") 
        match(target):
            case "1":
                return guestPrompt(obj["LLM 1"], limit)
            case "2":
                return guestPrompt(obj["LLM 2"], limit)
            case "3":
                return guestPrompt(obj["LLM 3"], limit)
            case "4":
                return guestPrompt(obj["LLM 4"], limit)
            case "5": 
                return guestPrompt(obj["LLM 5"], limit)
            case ":wq":
                return main()
            case _:
                print(target + " isn't an option, enter again")
def main(): 
    subprocess.call("clear", shell=True)
    print("enter :wq to exit the program")
    while True:
        target = input("1 - enter 1 to login\n2 - enter 2 to register\n3 - enter 3 for the guest account (no login needed but it only has 5 free prompt)\n4 - enter 4 to delete your account\n")
        match(target): 
            case "1": 
                return login()
            case "2":
                return register()
            case "3":
                token = os.urandom(8).hex()
                return guestModels(token, 5)
            case "4": 
                return deleteAccount()
            case ":wq":
                return sys.exit()
            case _:
                subprocess.call("clear", shell=True)
                print(target + " isn't an option, pick another option\n")
print(main())