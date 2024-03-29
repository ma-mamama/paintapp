FROM centos/python-36-centos7
ENV PYTHONUNBUFFERED 1
RUN mkdir ./code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
