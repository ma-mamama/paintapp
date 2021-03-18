FROM centos/python-36-centos7
ENV PYTHONUNBUFFERED 1
RUN mkdir ./code
WORKDIR /code
USER root
RUN yum update -y &&  yum -y install gcc python3-devel
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
